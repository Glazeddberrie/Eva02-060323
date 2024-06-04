const { Router } = require('express');
const ruta = Router();
const chamberRoutes = require('./chamber.routes.js');
const clientRoutes = require('./client.routes.js');
const merchRoutes = require('./merch.routes.js');
const ordersRoutes = require('./orders.routes.js');

ruta.use('/chamber', chamberRoutes);
ruta.use('/client', clientRoutes);
ruta.use('/merch', merchRoutes);
ruta.use('/orders', ordersRoutes);

module.exports = ruta;