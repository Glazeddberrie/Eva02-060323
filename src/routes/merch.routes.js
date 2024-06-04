
const { Router } = require('express');
const merchController = require('../db/controllers/merchController.js');
const ruta = Router();

const isNull = (value) => value === null || value === undefined;


ruta.get('/', (req, res) => {
    try {
        const list = merchController.getAll()
            .then((merch) => {
                res.send(merch);
            })
        console.log(list);
        res.status(200);
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

ruta.get('/search/:serial', (req, res) => {
    try {
        console.log(req.params.serial);
        var serial = parseInt(req.params.serial);
        const list = merchController.getOneById(serial)
            .then((merch) => {
                res.send(merch);
            })
        console.log(list);
        res.status(200);
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

//delete
ruta.get('/delete/:serial', (req, res) => {
    try {
        console.log(req.params.serial);
        var serial = parseInt(req.params.serial);
        const list = merchController.deleteOneById(serial)
            .then((merch) => {
                res.send(merch);
            })
        console.log(list);
        res.status(200);
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

//create
ruta.get('/create/:serial/:merchType/:merchSize/:stock/:price/:model', (req, res) => {
    try {
        console.log(req.params.serial, req.params.merchType, req.params.merchSize, req.params.stock, req.params.price, req.params.model);

        var serial = req.params.serial;
        var merchType = req.params.merchType;
        var merchSize = req.params.merchSize;
        var stock = req.params.stock;
        var price = req.params.price;
        var model = req.params.model;

        if (isNull(serial) || isNull(merchType) || isNull(merchSize) || isNull(stock) || isNull(price) || isNull(model)) {
            res.status(500).send("| Error : Datos faltantes y/o incorrectos |");
            return;
        } else {
            const list = merchController.create(serial, merchType, merchSize, stock, price, model)
                .then((merch) => {
                    res.send(merch);
                })
            console.log(list);
            res.status(200);
        }

    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

//update
ruta.get('/update/:serial/:merchType/:merchSize/:stock/:price/:model/:serialAux', (req, res) => {
    try {
        console.log(req.params.serial, req.params.merchType, req.params.merchSize, req.params.stock, req.params.price, req.params.model, req.params.serialAux);

        var serial = req.params.serial;
        var merchType = req.params.merchType;
        var merchSize = req.params.merchSize;
        var stock = req.params.stock;
        var price = req.params.price;
        var model = req.params.model;
        var serialAux = req.params.serialAux;

        if (isNull(serial) || isNull(merchType) || isNull(merchSize) || isNull(stock) || isNull(price) || isNull(model)) {
            res.status(500).send("| Error : Datos faltantes y/o incorrectos |");
            return;
        } else {
        const list = merchController.updateById(serial, merchType, merchSize, stock, price, model, serialAux)
            .then((merch) => {
                res.send(merch);
            })
        console.log(list);
        res.status(200);
        }
        
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

module.exports = ruta;