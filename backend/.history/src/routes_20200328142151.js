const express = require('express');
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const routes = express.Router();

//listagem
routes.get('/ongs', ongController.index);

//criação
routes.post('/ongs', ongController.create);

//criação
routes.post('/incidents', incidentController.create);

module.exports = routes;