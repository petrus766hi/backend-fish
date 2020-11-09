const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Kategori = require('../model/Kategori.js');


router.get('/api/kategori', function(req, res, next) {
  Kategori.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
});

router.get('/api/kategori/:id', function(req, res, next) {
  Kategori.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.post('/api/kategori', function(req, res, next) {
  Kategori.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.put('/api/kategori/:id', function(req, res, next) {
    Alamat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
  Kategori.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

module.exports = router;
