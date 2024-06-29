const { Router } = require('express');
const ruta = Router();
const chamberRoutes = require('./chamber.routes.js');

ruta.use('/chamber', chamberRoutes);


ruta.get('/', (req, res) => {

    res.render('login');
});
// Home
ruta.get('/home', (req, res) => {

    res.render('home');
});

ruta.get('/home/createdirt', (req, res) => {
    const data = [
        {
            "idSuelo": 1,
            "phSuelo": "6.5",
            "fosforoSuelo": "3.0",
            "nitrogenoSuelo": "2.0",
            "materiaOrganicaSuelo": "5.0",
            "potasioSuelo": "1.5"
        },
        {
            "idSuelo": 2,
            "phSuelo": "7.0",
            "fosforoSuelo": "2.5",
            "nitrogenoSuelo": "1.8",
            "materiaOrganicaSuelo": "4.0",
            "potasioSuelo": "1.4"
        },
        {
            "idSuelo": 3,
            "phSuelo": "5.5",
            "fosforoSuelo": "3.5",
            "nitrogenoSuelo": "2.4",
            "materiaOrganicaSuelo": "6.0",
            "potasioSuelo": "1.6"
        }
    ];
    res.render('createdirt', { data });
});

ruta.get('/home/createseed', (req, res) => {
    const dataSemilla = [
        {
            "idSemilla": 1,
            "nombreSemilla": "Tomato",
            "fechaPlantado": "2024-06-01",
            "phIdeal": 6.5,
            "cantidadSemilla": 50.0
        },
        {
            "idSemilla": 2,
            "nombreSemilla": "Carrot",
            "fechaPlantado": "2024-05-15",
            "phIdeal": 6.0,
            "cantidadSemilla": 30.0
        },
        {
            "idSemilla": 3,
            "nombreSemilla": "Strawberry",
            "fechaPlantado": "2024-04-20",
            "phIdeal": 5.5,
            "cantidadSemilla": 20.0
        }

    ];
    const dataSuelo = [
        {
            "idSuelo": 1,
            "phSuelo": "6.5",
            "fosforoSuelo": "3.0",
            "nitrogenoSuelo": "2.0",
            "materiaOrganicaSuelo": "5.0",
            "potasioSuelo": "1.5"
        },
        {
            "idSuelo": 2,
            "phSuelo": "7.0",
            "fosforoSuelo": "2.5",
            "nitrogenoSuelo": "1.8",
            "materiaOrganicaSuelo": "4.0",
            "potasioSuelo": "1.4"
        },
        {
            "idSuelo": 3,
            "phSuelo": "5.5",
            "fosforoSuelo": "3.5",
            "nitrogenoSuelo": "2.4",
            "materiaOrganicaSuelo": "6.0",
            "potasioSuelo": "1.6"
        }
    ];
    res.render('createseed', { dataSemilla , dataSuelo });
});
ruta.post('/home/createseed/delete/?', (req, res) => {
    const dirtId = req.params;
    res.redirect('/home');
});

ruta.get('/home/createuser', (req, res) => {
    const data = [
        {
            "idUsua": 1,
            "nombreUsua": "Jose Diaz",
            "contraUsua": "Waos123"
        },
        {
            "idUsua": 2,
            "nombreUsua": "Felipe Caceres",
            "contraUsua": "Waos123"
        },
        {
            "idUsua": 3,
            "nombreUsua": "Gabriella Jujihara",
            "contraUsua": "Waos123"
        },
        {
            "idUsua": 4,
            "nombreUsua": "Admin",
            "contraUsua": "Admin"
        },
        {
            "idUsua": 5,
            "nombreUsua": "Raul Ibarra",
            "contraUsua": "waos123"
        }
    ];
    res.render('createuser', { data });
});


module.exports = ruta;