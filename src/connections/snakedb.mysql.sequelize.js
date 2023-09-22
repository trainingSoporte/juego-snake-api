const {MySql,Model,DataTypes} = require('../../database/mysql/mysql-sequelize.js');

const snakeDBConfig = {
    database: 'snakedb',
    username: '',
    password: '',
    dbConfig: ''
}

module.exports =  {Model,MySql,DataTypes,snakeDBConfig};