const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');


//API
route.post('/api/blogs',controller.create);
route.get('/api/blogs',controller.find);
route.put('/api/blogs/:id',controller.update);
route.delete('/api/blogs/:id',controller.delete);


module.exports = route;