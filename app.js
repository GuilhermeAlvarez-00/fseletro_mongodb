const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const connection = require('./src/database/mysqldb');

app.use(express.json())
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home/index')
})


require('./src/database/mongodb')

require('./src/models/Produtos')
const Produtos = mongoose.model('produtos')

app.get('/produtos', async (req, res) => {
    const UserResponse = await Produtos.find()
    const UserJson = await UserResponse

    res.render('pages/produtos', {dados: UserJson})
})

app.get('/meuspedidos', (req, res) => {
    connection.query("SELECT * FROM cliente INNER JOIN pedidos ON cliente.id_cliente = pedidos.id_cliente;",
    (error, results) => {
        res.render('pages/meuspedidos', {dados: results})
    })
})

app.get('/lojas', (req, res) => {
    res.render('pages/lojas')
})

app.get('/faleconosco', (req, res) => {
    res.render('pages/faleconosco')
})

app.listen(3333, () => {
    console.log('Server running')
})