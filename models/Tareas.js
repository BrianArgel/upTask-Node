const { Sequelize } = require('sequelize');
const Sequalize = require('sequelize');
const db = require('../config/db');
const Proyectos = require('./Proyectos')

const Tareas = db.define('tareas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tarea:  Sequalize.STRING(100),
    estado: Sequalize.INTEGER(1)
})
Tareas.belongsTo(Proyectos)
module.exports = Tareas; 