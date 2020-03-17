const mongoose = require('mongoose');

const SuprimentoSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    description: String,
    price: Number,
});

module.exports = mongoose.model('Suprimento', SuprimentoSchema);