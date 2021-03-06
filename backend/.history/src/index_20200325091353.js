const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

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
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */
 
 /**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
 
 /**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */




app.listen(3333);