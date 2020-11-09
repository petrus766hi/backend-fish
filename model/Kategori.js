var mongoose = require('mongoose');
var KategoriSchema = new mongoose.Schema({
    kategori : {type:'String'},
});
module.exports = mongoose.model('Kategori', KategoriSchema);