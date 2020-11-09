const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const LoginUser = require('../controller/Login.js');
const RegisterController = require('../controller/Register.js');
const User = require('../model/User.js');


router.get('/api/user', function(req, res, next) {
    User.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
});

router.get('/api/user/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});


router.put('/api/user/:id', function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.delete('/api/user/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.post('/api/user/login', LoginUser.Login)


module.exports = router;
