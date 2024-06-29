const express = require('express');
const routes = require('./db/controllers/routesController.js');
const morgan = require('morgan');
const config = require('./config/config.js');
const path = require('path');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set('port', config.app.port);
app.use(morgan('dev'));
app.use(routes);


app.listen(app.get('port'), () => {
    console.log(`Servicio levantado: http://localhost:${app.get('port')}`);
});