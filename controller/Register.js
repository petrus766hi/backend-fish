const User = require('../model/User')
const bcrypt = require ('bcryptjs');
const saltRounds = 10;
// const {check, validationResult} = require ('express-validator');
class RegisterController{
    static Register (req, res){
        // const errors = validationResult (req);
        // if (!errors.isEmpty ()) {
        //   return res.status (400).json ({errors: errors.array ()});
        // }
        bcrypt.hash (req.body.password, saltRounds, function (err, hash) {
          console.log('reg', req.body)
            const {username,email, namaDepan, umur,namaBelakang } = req.body
          User.create ({
            username : username,
            password : hash,
            email : email,
            namaDepan : namaDepan,
            namaBelakang : namaBelakang,
            umur : umur,
          })

            .then (result => {
              res.status (201).json ({
                success: true,
                msg: 'Success Create',
                data: result,
              });
            })
            .catch (err => {
              res.status (500).json ({
                success: false,
                msg: 'Failed Register',
                detail: err,
              });
            });
        });
    }
}

module.exports = RegisterController