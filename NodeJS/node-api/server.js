const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors()); // Ver documentação para poder limitar domínios que podem acessar nossa API

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {
        useNewUrlParser: true
    }
);
requireDir('./src/models');

// Routes
app.use('/api', require('./src/routes'));

app.listen(3001);