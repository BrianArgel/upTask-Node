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
    //Listar el proyecto
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl)

    //actualizar el proyecto
    router.get('/proyectos/editar/:id', proyectosController.formularioEditar)

    //Editar nombre proyecto
    router.post('/nuevo-proyecto/:id', 
    body('nombre').not().isEmpty().trim().escape(),
    proyectosController.actualizarProyecto)

    return router;
}