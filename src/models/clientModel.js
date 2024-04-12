const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    phone: String,
    email: String
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client