const express = require('express');
const router = express.Router();

//importar express validator
const { body } = require('express-validator/check')

//importar el controllador
const proyectosController = require('../controllers/proyectosController')
const tareasController = require('../controllers/tareasController')

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

    //eliminar proyecto
    router.delete('/proyectos/:url', proyectosController.eliminarProyecto)

    //router para las tareas
    router.post('/proyectos/:url', tareasController.agregarTarea)

    //cambiar el estado de las tareas
    router.patch('/tareas/:id', tareasController.cambiarEstadoTarea)

    return router;
}