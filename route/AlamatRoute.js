const express = require('express');
const router = express.Router();
const Alamat = require('../model/Alamat.js');
const Auth = require('../midleware/auth')


router.get('/api/alamat', function(req, res, next) {
    Alamat.find().populate('Id_user')
    .then((result) =>{
      res.status (200).json ({
        msg: 'Success get',
        data: result,
      });
    })
    .catch((err)=>{
      res.status (400).json ({
        msg: 'Failed get',
        data: err,
      });
    })
});

router.get('/api/alamat/:id', function(req, res, next) {
    Alamat.findById(req.params.id)
    .populate("Id_user")
    .then((result)=>{
      res.status (200).json ({
        msg: 'Success get',
        data: result,
      });
    })
    .catch((err)=>{
      res.status (400).json ({
        msg: 'Failed get',
        data: err,
      });
    })
});

router.post('/api/alamats', Auth, function(req, res, next) {
    const {id} = req.user
    Alamat.create({
      kecamatan : req.body.kecamatan,
      desa : req.body.desa,
      kabupaten : req.body.kabupaten,
      provinsi : req.body.provinsi,
      negara : req.body.negara,
      Nomor_hp : req.body.Nomorhp,
      Kode_pos : req.body.Kodepos,
      Id_user: id
    })
    .then((results)=>{
      res.status (201).json ({
        status: true,
        msg: 'Success Create',
        data: results,
      });
    })
    .catch (err => {
      res.status (500).json ({
        status: false,
        msg: 'Failed Create',
        detail: err,
      });
    });
});

router.put('/api/alamat/:id', function(req, res, next) {
    Alamat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.delete('/api/alamat/:id', function(req, res, next) {
    Alamat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

module.exports = router;
