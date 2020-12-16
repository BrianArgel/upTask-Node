const express = require('express');
const app = express();
const routes = require('./routes/index')
const path = require('path')

//donde cargar los archivos estaticos
app.use(express.static('public'));
//habilitar pug
app.set('view engine', 'pug');

//añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'))

//creando app en expreess 
app.use('/', routes())

app.listen(10000, () => {
    console.log("funcionando express")
})