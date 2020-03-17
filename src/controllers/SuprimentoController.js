const Suprimento = require('../models/Suprimento');

module.exports = {

    async show(req, res) {

        const suprimentos = await Suprimento.find();

        return res.json(suprimentos);

    },

    async showPeriod(req, res) {

        const {from, to} = req.query;

        const suprimentos = await Suprimento.find({date:{$gte: from, $lte: to}});

        return res.json(suprimentos);

    },

    async store(req, res) {

        const {date, description, price} = req.body;

        const suprimento = await Suprimento.create({
            date,
            description,
            price
        });

        return res.json(suprimento);

    },

}
