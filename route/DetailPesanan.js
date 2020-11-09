const express = require('express');
const router = express.Router();
const DetailPesanan = require('../model/DetailPesanan.js');
const Auth = require('../midleware/auth')

router.get('/api/detail/:id', Auth, function(req, res, next) {
    DetailPesanan.find({Id_User: req.params.id}, function (err, detail) {
      if (err) {
        return next(err);
      }else{
        const sum = detail.reduce((a, {Harga_Produk}) => a + Harga_Produk, 0);
        res.status(200).json({
          success : true,
          data: detail,
          jumlah : sum
        })

      }

    });
});

router.get('/api/detail/:id', function(req, res, next) {
    DetailPesanan.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.post('/api/detail/:id', function(req, res, next) {
    const {Nama_Produk,Harga_Produk, Id_Pesanan, Gambar, Jumlah } = req.body
    DetailPesanan.create({
      Nama_Produk : Nama_Produk,
      Harga_Produk: Harga_Produk,
      Id_Pesanan: Id_Pesanan,
      Gambar: Gambar,
      Jumlah: Jumlah,
      Id_User: req.params.id
    })
    .then((result) =>{
      res.status(201).json({
        success : true,
        data: result
      })
    })
    .catch(next)
});

router.put('/:id', function(req, res, next) {
    DetailPesanan.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    DetailPesanan.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

module.exports = router;
