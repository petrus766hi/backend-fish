const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken')
const {check, validationResult} = require ('express-validator');
const User = require ('../model/User.js');

class LoginUser {
    static async Login (req,res) {
        const errors = validationResult (req);
        if (!errors.isEmpty ()) {
          return res.status (400).json ({errors: errors.array()});
        }
        const{ email, password} = req.body
        try{
          const userName = await User.findOne({email})
          if(!userName){
            return res.status(400).json({msg:"User Invalid"})
          }
          const matchPassword = await bcrypt.compare(password, userName.password)
          if(!matchPassword){
            return res.status(400).json({error: [{msg: "Invalid Username/Email"}]})
          }
          const token = {
            user : {
              id : userName.id
            }
          }
          jwt.sign(token, 'jwtSecret', { expiresIn: "10h" }, (err, tokens) =>{
            if(err){
              res.json({
                success: false,
                data: err
              })
            }else{
              res.json({
                success: true,
                data: userName,
                tokens
              })
            }
          })

        }catch(err){
          res.status(500).json(err)
        }
    }
}

module.exports = LoginUser