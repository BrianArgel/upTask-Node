exports.poryectoshome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    })
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}
exports.nuevoProyecto = (req, res) => {
    //lo que el usuario escriba

    console.log(req.body)
}