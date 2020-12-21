const Proyectos = require('../models/Proyectos');
const Tareas = require('../models/Tareas');


exports.agregarTarea =async (req, res, next) => {
    //obtener el proyecto actuaal
    const proyecto = await Proyectos.findOne({where: {url: req.params.url}})

    //leer el valor del input
    const {tarea} = req.body;
    //estado 0 igual a imcompleto y ID
    const estado = 0;
    const proyectoId = proyecto.id;


    //insertar en la base de datos
   const resultado =  await Tareas.create({tarea, estado, proyectoId});
   if(!resultado){
    return next()
   }

   //redirreccionamiento
   res.redirect(`/proyectos/${req.params.url}`)
}

exports.cambiarEstadoTarea = async(req, res, next) => {
    
    // res.status(200).send("Todo brien")
    const {id} = req.params; 
    const tarea = await Tareas.findOne({where: {id}});
    let estado = 0;
    if(tarea.estado === estado ){
        estado = 1
    }
    tarea.estado = estado;
    const resultado = await tarea.save()
    if(!resultado) return next()

    res.status(200).send("Actualizado...")
    
    

}