const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pesanan = require('../model/Pesanan.js');


router.get('/api/pesanan', function(req, res, next) {
    Pesanan.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
});

router.get('/api/pesanan/:id', function(req, res, next) {
    Pesanan.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.get('/api/pesanans/:id', function(req, res, next) {
  Pesanan.find({Id_user: req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post('/api/pesanan/:id', function(req, res, next) {
  const {Nama_Produk, Harga, Gambar, Jumlah} = req.body
    Pesanan.create({
      Nama_Produk : Nama_Produk,
      Harga : Harga,
      Gambar: Gambar,
      Jumlah : Jumlah,
      Id_user : req.params.id
    })
    .then((result) =>{
      console.log('result', result)
      res.status (201).json ({
        succes: true,
        msg: 'Success Create',
        data: result,
      });
    })
    .catch((err)=>{
      res.status (400).json ({
        succes: false,
        msg: 'Failed Create',
        data: err,
      });
    })
});

router.put('/api/pesanan/:id', function(req, res, next) {
    const {Checkout_Status} = req.body
    Pesanan.findByIdAndUpdate(req.params.id,{ Checkout_Status: Checkout_Status }, {new: true})
    .then((result) =>{
      res.status(201).json({
        success : true,
        msg:'Success Update',
        data: result
      })
    })
    .catch(next)
});

router.delete('/api/pesanan/:id', function(req, res, next) {
    Pesanan.findByIdAndRemove(req.params.id)
    .then((result) =>{
      res.status(201).json({
        succes: true,
        msg: "Succes Delete",
        data: result
      })
    })
    .catch((err) =>{
      res.status(400).json({
        succes: false,
        msg: "Failed Delete",
        data: err
      })
    })
});

module.exports = router;
