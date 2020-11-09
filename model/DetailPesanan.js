var mongoose = require('mongoose');
var DetailSchema = new mongoose.Schema({
    Id_User : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    Id_Produk : {type: mongoose.Schema.Types.ObjectId, ref: 'Produk'},
    Id_Pesanan : {type: mongoose.Schema.Types.ObjectId, ref: 'Pesanan'},
    Nama_Produk :{type :String},
    Harga_Produk : {type: Number},
    Gambar : {type: String},
    Jumlah: {type: Number}
});
module.exports = mongoose.model('DetailPesanan', DetailSchema);