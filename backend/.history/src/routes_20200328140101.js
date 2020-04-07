const express = require('express');

const ongController = require('./controllers/OngController');

const connection = require('./database/connection');

const routes = express.Router();

//listagem
// routes.get('/ongs', async (request, response) => {
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);
// });

//criação
routes.post('/ongs', async (request, response) => {
    
});

module.exports = routes;