const crypto = require('crypto'); // criando um texto aleatorio

const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
     
        return response.json(ongs);
     },

    async create(request, response) {
        const { name, email, whatsapp, city, uf}= request.body;

        // criando 4 bytes de id 
       const id = crypto.randomBytes(4).toString('HEX');
       
        await connection('ongs').insert({
           id,
           name,
           email,
           whatsapp,
           city,
           uf,
        })
         // console.log(id, name);
        return response.json({ id });
    }
};