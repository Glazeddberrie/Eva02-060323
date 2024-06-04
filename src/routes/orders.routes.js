const { Router } = require('express');
const ordersController = require('../db/controllers/ordersController.js');
const ruta = Router();

const isNull = (value) => value === null || value === undefined;


ruta.get('/', (req, res) => {
    try {
        const list = ordersController.getAll()
            .then((orders) => {
                res.send(orders);
            })
        console.log(list);
        res.status(200);

    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

ruta.get('/byId/:id', (req, res) => {
    try {
        console.log(req.params.id);
        var id = parseInt(req.params.id);
        const list = ordersController.getOneById(id)
            .then((orders) => {
                res.send(orders);
            })
        console.log(list);
        res.status(200);

    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

//delete
ruta.get('/delete/:id', (req, res) => {
    try {
        console.log(req.params.id);
        var id = parseInt(req.params.id);
        const list = ordersController.deleteOneById(id)
            .then((orders) => {
                res.send(orders);
            })
        console.log(list);
        res.status(200);

    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

//create
ruta.get('/create/:creationDate/:serial/:price/:email', (req, res) => {
    try {
        console.log(req.params.creationDate, req.params.serial, req.params.price, req.params.email);

        var creationDate = req.params.creationDate;
        var serial = req.params.serial;
        var price = req.params.price;
        var email = req.params.email;

        if (isNull(creationDate) || isNull(serial) || isNull(price) || isNull(email)) {
            res.status(500).send("| Error : Datos faltantes y/o incorrectos |");
            return;
        } else {
            const list = ordersController.create(creationDate, serial, price, email)
                .then((orders) => {
                    res.send(orders);
                })
            console.log(list);
            res.status(200);
        }

    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

//update
ruta.get('/update/:creationDate/:serial/:price/:email', (req, res) => {
    try {
        console.log(req.params.creationDate, req.params.serial, req.params.price, req.params.email);


        var creationDate = req.params.creationDate;
        var serial = req.params.serial;
        var price = req.params.price;
        var email = req.params.email;
        
        if (isNull(creationDate) || isNull(serial) || isNull(price) || isNull(email)) {
            res.status(500).send("| Error : Datos faltantes y/o incorrectos |");
            return;
        } else {
            const list = ordersController.update(creationDate, serial, price, email)
                .then((orders) => {
                    res.send(orders);
                })
            console.log(list);
            res.status(200);
        }
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

module.exports = ruta;