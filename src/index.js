const express = require('express');
const routes = require('./db/controllers/routesController.js');
const morgan = require('morgan');
const config = require('./config/config.js');

const app = express();

app.set('port', config.app.port);
app.use(morgan('dev'));
app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`Servicio levantado: http://localhost:${app.get('port')}`);
});