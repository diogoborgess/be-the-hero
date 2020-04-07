const express = require('express');
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const routes = express.Router();
//ONGS
    //listagem
    routes.get('/ongs', ongController.index);
    //criação
    routes.post('/ongs', ongController.create);

//CASOS
    //criação
    routes.post('/incidents', incidentController.create);
    //listagem
    routes.get('/incidents', incidentController.index);
    //delete
    routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;