var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username : {type: 'String', required:true},
    password : {type: 'String', required:true},
    email : {type: 'String', required:true},
    namaDepan : {type: 'String',required:true },
    namaBelakang : {type: 'String', required:true},
    umur : {type: 'String', required:true},
    role : {type: 'String', default:'user'},
});
module.exports = mongoose.model('User', UserSchema);