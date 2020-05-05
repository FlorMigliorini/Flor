const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('test', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  },
  
});
