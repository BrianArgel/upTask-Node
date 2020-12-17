const express = require('express');
const app = express();
const routes = require('./routes/index')
const path = require('path')
const bodyParser = require('body-parser')


//crear la conexion a la base de datos
const db = require('./config/db');
// helpers con algunas funciones
const helpers = require('./helpers')
//importar el modelo 
require('./models/Proyectos')
db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch((e) => console.log(e))
//donde cargar los archivos estaticos
app.use(express.static('public'));
//habilitar pug
app.set('view engine', 'pug');
//express validator

//añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'))
//pasar vardum a la aplicacion
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
})
//body parser
app.use(bodyParser.urlencoded({extended: true}))
//creando app en expreess 
app.use('/', routes())

app.listen(10000, () => {
    console.log("funcionando express")
})