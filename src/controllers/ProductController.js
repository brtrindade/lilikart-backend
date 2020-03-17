const Product = require('../models/Product');

module.exports = {


    async index(req, res) {

        const {product_id} = req.params;

        const product = await Product.findById(product_id);

        return res.json(product);

    },

    async show(req, res) {

        const {nome} = req.query;

        const products = !nome ? await Product.find() : await Product.find({nome: new RegExp(nome, 'i')}).limit(5);
        const products = await Product.find({nome: {$regex: `${nome}`, $options: 'i'}}).limit(5);

        return res.json(products);

    },
    
    async store(req, res) {
        
        const {nome, descricao, valor} = req.body;

        const product = await Product.create({       
            nome,
            descricao,
            valor
        })

        return res.json(product)
    }

};
