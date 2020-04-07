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
 * Query Parms: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Parms: Parâmetros utilizados para identificar recursos
 */

app.get('/users/:id', (request, response)=>{
    const params =  request.params;

    console.log(params);
    
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Diogo Borges'
    });
});

app.listen(3333);