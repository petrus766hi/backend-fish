var mongoose = require('mongoose');
var PesananSchema = new mongoose.Schema({
    Id_user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    Nama_Produk: {type:String},
    Jumlah:{type: Number},
    Harga: {type: Number},
    Checkout_Status: {type: Boolean, default: false},
    Gambar: {type: String}

});
module.exports = mongoose.model('Pesanan', PesananSchema);