const express = require('express');
const ongController = require('./controllers/OngController');
const routes = express.Router();

//listagem
routes.get('/ongs', ongController.index);

//criação
routes.post('/ongs', ongController.create);

module.exports = routes;