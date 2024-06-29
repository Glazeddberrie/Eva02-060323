const { Router } = require('express');
const chamberController = require('../db/controllers/chamberController');
const ruta = Router();

const isNull = (value) => value === null || value === undefined;

//BuscarTodo
ruta.get('/', (req, res) => {
    try {
        const list = chamberController.getAll()
            .then((list) => {
                res.send(list);
            })
        console.log(list);
    } catch (error) {
        console.log("Error: " + error);
    }
});

//search
ruta.get('/search/:id', (req, res) => {
    try {
        console.log(req.params.id);
        var id = parseInt(params.id);
        if (isNaN(id)) {
            res.status(500).send("| Error : Solo numeros como busqueda |");
            return;
        } else {
            const list = chamberController.getOneById(id)
                .then((chamber) => {
                    res.send(chamber);
                })
            console.log(list);
            res.status(200);
        }
    } catch (error) {
        res.status(500).send("| Error : " + error);
    }
});

//delete
ruta.get('/delete/:id', (req, res) => {
    try {
        console.log(req.params.id);
        var id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(500).send("| Error : Solo numeros como busqueda |");
            return;
        } else {
            const list = chamberController.deleteOneById(id)
                .then((chamber) => {
                    res.send(chamber);
                })
            console.log(list);
            res.status(200);
        }
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }
});

//create
ruta.get('/create/data', (req, res) => {
    try {
        console.log(req.params)

        if (isNull(data)) {
            res.status(500).send("| Error : Datos faltantes y/o incorrectos |");
            return;
        } else {
            const list = chamberController.create(data)
                .then((chamber) => {
                    res.send(chamber);
                })
            console.log(list);
            res.status(200);
        }
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }

});

//update
ruta.get('/update/:email/:name/:surname/:rut/:charge/:password/:username/:id', (req, res) => {
    try {
        console.log(req.params.email, req.params.name, req.params.surname, req.params.rut, req.params.charge, req.params.password, req.params.username, req.params.id);
        var email = req.params.email;
        var name = req.params.name;
        var surname = req.params.surname;
        var rut = req.params.rut;
        var charge = req.params.charge;
        var password = req.params.password;
        var username = req.params.username;
        var id = parseInt(req.params.id);
        
        if (isNaN(id) || sNull(email) || isNull(name) || isNull(surname) || isNull(rut) || isNull(charge) || isNull(password) || isNull(username)) {
            res.status(500).send("| Error : Datos faltantes y/o incorrectos |");
            return;
        } else {
            const list = chamberController.updateById(email, name, surname, rut, charge, password, username, id)
                .then((chamber) => {
                    res.send(chamber);
                })
            console.log(list);
            res.status(200);
        }
    } catch (error) {
        res.status(500).send("| Error -> " + error);
    }

});

module.exports = ruta;
