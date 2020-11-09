const express = require('express');
const router = express.Router();
const RegisterController = require('../controller/Register.js');
const {check, validationResult} = require ('express-validator');
router.post('/api/user/register', RegisterController.Register)

module.exports = router;