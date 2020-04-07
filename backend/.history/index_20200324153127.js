const express = require('express');
const app = express();

/**
 * Rota / Recurso
 */

 /**
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

app.get('/users', (request, response)=>{
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Diogo Borges'
    });
});

app.listen(3333);