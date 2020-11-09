var mongoose = require('mongoose');
var CarousellSchema = new mongoose.Schema({
    Gambar : {type:'String'},

});
module.exports = mongoose.model('Carousell', CarousellSchema);