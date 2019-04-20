const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APP
const app = express();

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {
        useNewUrlParser: true
    }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

// Criando primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: "Produto Fake",
        description: "Produto Fake Descrição",
        url: "http://www.produtofake.fake/"
    });

    return res.send('Hello Luandev');
});

app.listen(3001);