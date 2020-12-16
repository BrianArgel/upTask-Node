const express = require('express');
const router = express.Router();

//importar el controllador
const proyectosController = require('../controllers/proyectosController')


module.exports = function() {
    //rutas para el home
    router.get('/', proyectosController.poryectoshome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);

    return router;
}