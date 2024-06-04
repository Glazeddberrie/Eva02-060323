const { Router } = require('express');
const clientController = require('../db/controllers/clientController.js');
const ruta = Router();

const isNull = (value) => value === null || value === undefined;
ruta.get('/', (req, res) => {
    const list = clientController.getAll()
        .then((client) => {
            res.send(client);
        })
    console.log(list);
});

ruta.get('/search/:id', (req, res) => {
    try {
        console.log(req.params.id);
        var id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(500).send("| Error : Solo numeros como busqueda |");
            return;
        } else {
            const list = clientController.getOneById(id)
                .then((client) => {
                    res.send(client);
                })
            console.log(list);
            res.status(201);
        }
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

ruta.get('/delete/:id', (req, res) => {
    try {
        console.log(req.params.id);
        var id = parseInt(req.params.id);
        const list = clientController.deleteOneById(id)
            .then((client) => {
                res.send(client);
            })
        console.log(list);
        res.status(201);
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

ruta.get('/create/:email/:name/:surname/:pass/:rut/:phone_number', (req, res) => {
    try {
        console.log(req.params.email, req.params.name, req.params.surname, req.params.pass, req.params.rut, req.params.phone_number);
        var email = req.params.email;
        var name = req.params.name;
        var surname = req.params.surname;
        var pass = req.params.pass;
        var rut = req.params.rut;
        var phone_number = req.params.phone_number;

        if (isNull(email) || isNull(name) || isNull(surname) || isNull(pass) || isNull(rut) || isNull(pass) || isNull(phone_number)) {
            res.status(500).send("| Error : Datos faltantes y/o incorrectos |");
            return;
        } else {
            const list = clientController.create(email, name, surname, pass, rut, phone_number)
                .then((client) => {
                    res.send(client);
                })
            console.log(list);
            res.status(201);
        }

    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }

});

ruta.get('/update/:email/:name/:surname/:pass/:rut/:phone_number/:id', (req, res) => {
    try {
        console.log(req.params.email, req.params.name, req.params.surname, req.params.pass, req.params.rut, req.params.phone_number, req.params.id);
        var email = req.params.email;
        var name = req.params.name;
        var surname = req.params.surname;
        var pass = req.params.pass;
        var rut = req.params.rut;
        var phone_number = req.params.phone_number;
        var id = parseInt(req.params.id);

        if (isNull(email) || isNull(name) || isNull(surname) || isNull(pass) || isNull(rut) || isNull(pass) || isNull(phone_number)) {
            res.status(500).send("| Error : Datos faltantes y/o incorrectos |");
            return;
        } else {
            const list = clientController.updateById(email, name, surname, pass, rut, phone_number, id)
                .then((client) => {
                    res.send(client);
                })
            console.log(list);
            res.status(201);
        }
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

module.exports = ruta;