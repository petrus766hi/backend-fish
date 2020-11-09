const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Produk = require('../model/Produk.js');


router.get('/api/produk', function(req, res, next) {
    Produk.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
});

router.get('/api/produk/:id', function(req, res, next) {
    Produk.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.get('/api/produks/:id', function(req, res, next) {
  Produk.find({Id_kategori: req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/api/produk/:id', function(req, res, next) {
    const { Nama_barang, tumbnail, gambar,deskripsi,harga,jumlah, Deskripsi_singkat} = req.body
    Produk.create({
    Nama_barang : Nama_barang,
    tumbnail : tumbnail,
    gambar : gambar,
    deskripsi : deskripsi,
    harga : harga,
    jumlah : jumlah,
    Deskripsi_singkat : Deskripsi_singkat,
    Id_kategori : req.params.id
    },
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.put('/api/produk/:id', function(req, res, next) {
    Produk.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.delete('/api/produk/:id', function(req, res, next) {
    Produk.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

module.exports = router;
