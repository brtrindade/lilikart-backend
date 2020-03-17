const mongoose = require('mongoose');

const SaleDetailsSchema = new mongoose.Schema({
    _id: false,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: Number,
    total: Number
})

const SaleSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    tema: String,
    products: [SaleDetailsSchema],
    totalPrice: Number,
    date: { type: Date, default: Date.now },
    payed: Boolean,
});

module.exports = mongoose.model('Sale', SaleSchema);