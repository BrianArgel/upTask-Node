const express = require('express');
const router = express.Router();

//importar express validator
const { body } = require('express-validator/check')

//importar el controllador
const proyectosController = require('../controllers/proyectosController')


module.exports = function() {
    //rutas para el home
    router.get('/', proyectosController.poryectoshome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', 
    body('nombre').not().isEmpty().trim().escape(),
    proyectosController.nuevoProyecto)
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl)

    return router;
}