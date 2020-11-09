var mongoose = require('mongoose');
var ProdukSchema = new mongoose.Schema({
    Nama_barang : {type: 'String'},
    tumbnail : {type: 'String'},
    gambar : {type: 'String'},
    deskripsi : {type: 'String'},
    harga : {type: 'Number'},
    jumlah : {type: 'Number'},
    Deskripsi_singkat : {type: 'String'},
    Id_kategori : {type: mongoose.Schema.Types.ObjectId, ref: 'Kategori'},
});
module.exports = mongoose.model('Produk', ProdukSchema);