const { Sequelize } = require('sequelize');
//extrar valores de variables.env
require('dotenv').config({path: 'variables.env'})

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize(process.env.BD_NOMBRE,
    process.env.BD_USER, '', {
    host: process.env.BD_HOST,
    dialect: 'mysql',
    port: process.env.BD_PORT,
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });

  module.exports = db;
  