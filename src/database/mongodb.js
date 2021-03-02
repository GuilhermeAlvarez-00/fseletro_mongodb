const mongoose = require('mongoose')

const connect = () => {
    mongoose
    .connect('mongodb://localhost/eletrostack', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected database!')
    })
    .catch(error => {
        console.log(`Error ${error}`)
    })
}

module.exports = connect()