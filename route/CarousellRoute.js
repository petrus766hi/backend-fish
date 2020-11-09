const express = require('express');
const router = express.Router();
const Carousell = require('../model/Carousell');
const Auth = require('../midleware/auth')


router.get('/api/carousell', function(req, res, next) {
  Carousell.find().populate('Id_user')
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

router.get('/api/carousell/:id', function(req, res, next) {
  Carousell.findById(req.params.id)
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

router.post('/api/carousell',function(req, res, next) {
    Carousell.create({
      Gambar : req.body.Gambar,
    })
    .then((results)=>{
      res.status (201).json ({
        msg: 'Success Create',
        data: results,
      });
    })
    .catch (err => {
      res.status (500).json ({
        msg: 'Failed Create',
        detail: err,
      });
    });
});

router.put('/api/carousell/:id', function(req, res, next) {
    Carousell.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
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
