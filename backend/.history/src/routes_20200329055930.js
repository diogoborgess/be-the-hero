const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const PorfileController = require('./controllers/PorfileController');
const routes = express.Router();
//ONGS
    //listagem
    routes.get('/ongs', OngController.index);
    //criação
    routes.post('/ongs', OngController.create);

//CASOS
    //criação
    routes.post('/incidents', IncidentController.create);
    //listagem
    routes.get('/incidents', IncidentController.index);
    //delete
    routes.delete('/incidents/:id', IncidentController.delete);

//PROFILE
    //listagem
    routes.get('/profile', PorfileController.index);

module.exports = routes;