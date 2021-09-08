const express = require('express');
const route = express.Router();
const controller = require('../controller/mailController')


route.post('/',controller.sendMail);


module.exports = route;