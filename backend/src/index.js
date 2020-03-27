const express = require('express');  // importando as funcionalidades do express
const cors = require('cors');
const routes = require('./routes'); // importando os arquivos da pasta

const app = express();  // instanciando a aplicação


app.use(cors());
app.use(express.json()); // convertendo os dados da aplicação
app.use(routes);

app.listen(3333);  // acessando na porta 3333

/*
* Rota / recurso
*/
/**
 * Metodo HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * Put: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: são parametros nomeados enviados na rota após "?" (filtros, Paginação)
  * Route Params: Paramentros utilizados para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * SQL: MySql, SQLite, PostgreSQL
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * DRIVE: SELECT * FROM arquivo
    * QUERY BUILDER: table('users').select('*').where()
    */



