const Sale = require('../models/Sale');

module.exports = {

    async index(req, res) {

        const {sale_id} = req.params;
        const sale = await Sale.findById(sale_id).populate('client').populate('products.product')
            

        return res.json(sale)

    },    

    async show(req, res) {

        const sales = await Sale.find()
        return res.json(sales);

    },

    async findByClientId(req, res, next) {

        const {client_id} = req.query;

        if(!client_id) next();

        const clients = await Sale.find({client: client_id});

        return res.json(clients);

    },

    async store(req, res) {

        const {client_id, tema, products, totalPrice, date, payed} = req.body;

        const sale = await Sale.create({
            client: client_id,
            tema,
            products,
            totalPrice,
            date,
            payed
        });

        await sale.populate('client').populate('products.product').execPopulate();

        return res.json(sale);

    }

};
