const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Produtos = new Schema({
    categoria: {
        type: String,
        required: true
    },
    
    descricao: {
        type: String,
        required: true
    },

    preco: {
        type: String,
        required: true
    },

    precovenda: {
        type: String,
        required: true
    },

    nomeimagem: {
        type: String,
        required: true
    },
})

mongoose.model('produtos', Produtos)