const express = require('express');
const app = express();

/**
 * Rota / Recurso
 */

 /**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
 
 /**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 */

app.post('/users', (request, response)=>{
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Diogo Borges'
    });
});

app.listen(3333);