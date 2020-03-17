const express = require('express');

const ProductController = require('./controllers/ProductController');
const ClientController = require('./controllers/ClientController');
const SaleController = require('./controllers/SaleController');
const SuprimentoController = require('./controllers/SuprimentoController');

const routes = express.Router();

routes.get('/sales', SaleController.show);
routes.get('/sales/:sale_id', SaleController.index)
routes.post('/sales', SaleController.store);

routes.get('/products/:product_id', ProductController.index);
routes.get('/products', ProductController.show);
routes.post('/products', ProductController.store);

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);

routes.get('/suprimentos', SuprimentoController.show);
routes.get('/suprimentos/periodo', SuprimentoController.showPeriod);
routes.post('/suprimentos', SuprimentoController.store);

module.exports = routes;
