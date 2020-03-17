const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    instagram: String,
});

module.exports = mongoose.model('Client', ClientSchema);