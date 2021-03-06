const Proyectos = require('../models/Proyectos')
const Tareas = require('../models/Tareas')
const slug = require('slug')
exports.poryectoshome = async(req, res) => {

    const proyectos = await Proyectos.findAll();
    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    })
}

exports.formularioProyecto = async(req, res) => {
    const proyectos = await Proyectos.findAll();
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}
exports.nuevoProyecto = async(req, res) => {
    //lo que el usuario escriba
    const proyectos = await Proyectos.findAll();


    const { nombre } = req.body;
    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'})
    }

    //si hay errores
    if(errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores,
            proyectos
        
        })
    } else {
        //conectar a la bas de datos si no hay errores
     const proyecto = await Proyectos.create({ nombre })
     res.redirect('/')
       
    }
}  

exports.proyectoPorUrl = async(req, res, next) => {
    const proyectos = await Proyectos.findAll();
    const proyecto = await Proyectos.findOne({
        where: {
            url: req.params.url
        }
    })
    //estraer tareas del proyecto actual

    const tareas = await Tareas.findAll({
        where : {
            proyectoId : proyecto.id
        }
    })
    if(!proyecto) return next();

    res.render('tareas', {
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos,
        tareas
    })
}

exports.formularioEditar = async(req, res) => {
    //render a la vista
    const proyectosPromise =  Proyectos.findAll();
    const proyectoPromise =  Proyectos.findOne({
        where: {
            id: req.params.id
        }
    })
    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise])
    res.render('nuevoProyecto', {
        nombrePagina: "Editar Proyecto",
        proyectos,
        proyecto
    })
}


exports.actualizarProyecto = async(req, res) => {
    //lo que el usuario escriba
    const proyectos = await Proyectos.findAll();


    const { nombre } = req.body;
    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'})
    }

    //si hay errores
    if(errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores,
            proyectos
        
        })
    } else {
        //conectar a la bas de datos si no hay errores
     await Proyectos.update(
        { nombre: nombre },
        {where: {
            id: req.params.id
        }})
     res.redirect('/')
       
    }
}  

exports.eliminarProyecto = async(req, res, next) => {
    //req o params obtener url
    console.log(req)
    const {urlProyecto} = req.query;
    const resultado = await Proyectos.destroy({where: {url: urlProyecto}})
    if(!resultado){
        return next();
    }
    res.status(200).send("Proyecto eliminado correctamente")
}