const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-otri6.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//GET , POST , PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição e delete)
// req.body = acessar corpo da requisição (para criação, edição de registros)

app.use(express.json());
app.use(routes);

app.listen(3333);


