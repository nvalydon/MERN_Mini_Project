const Sequelize = require('sequelize');
module.exports = new Sequelize("usedb", 'root', 'password',{
   host: 'localhost',
   port: '3306',
   dialect: 'mysql',
   define: {
       timestamps: false
   },
   
   pool:{
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
   },

});