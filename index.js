const express = require('express');
const app = express();
const routes = require('./routes/index')
const path = require('path')
const bodyParser = require('body-parser')

//donde cargar los archivos estaticos
app.use(express.static('public'));
//habilitar pug
app.set('view engine', 'pug');

//añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Habilitar body parser datos del form
app.use(bodyParser.urlencoded({extended: true}))
//creando app en expreess 
app.use('/', routes())

app.listen(10000, () => {
    console.log("funcionando express")
})