const { Router } = require('express');
const chamber = require('../../routes/chamber.routes.js');
const root = require('../../routes/routes.js');

const rutas = Router();

rutas.use('/chamber', chamber);

rutas.use('/', root);

module.exports = rutas;

