const Sequelize = require('sequelize');
module.exports = new Sequelize("userdb", 'root', 'password',{
   host: '192.168.1.123',
   port: '3306',
   dialect: 'mysql',
   operatorsAliases: false,
   
   pool:{
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
   },

});