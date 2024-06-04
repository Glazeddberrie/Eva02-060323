const { Router } = require('express');
const merch = require('../../routes/merch.routes.js');
const orders = require('../../routes/orders.routes.js');
const client = require('../../routes/client.routes.js');
const chamber = require('../../routes/chamber.routes.js');
const root = require('../../routes/routes.js');

const rutas = Router();

rutas.use('/chamber', chamber);
rutas.use('/client', client);
rutas.use('/merch', merch);
rutas.use('/orders', orders);

rutas.use('/', root);

module.exports = rutas;

