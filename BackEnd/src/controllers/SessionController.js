// Metodos controllers
//Index - Listagem de sessoes
//Show - Listar uma unica sessao
//Store - Criar um sessão
//Update - Alterar uma sessão
//Destroy - remover / deletar uma sessão 
const User = require('../models/User');

module.exports = {
   async store(req, res){
        const { email } = req.body;
    let user = await User.findOne( { email });

    if (!user){
        user = await User.create({ email });
    }
        return res.json(user);
    }
};