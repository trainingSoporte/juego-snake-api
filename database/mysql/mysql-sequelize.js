const { Sequelize, DataTypes, Model, QueryTypes } = require('sequelize');
// const path = 'mysql://root@localhost:3306/delilah_resto';
// const sequelize = new Sequelize(path);

const dbConfig = {
    host: '',
    dialect: 'mysql'
}

class MySql extends Sequelize {

    constructor(config) {
        super(config.database, config.username, config.password, Object.assign(dbConfig, config.dbConfig));
        this.config = {
            database: '',
            username: '',
            password: '',
            dbConfig: dbConfig
        };

        this.config = Object.assign(this.config, config);
    }
}

module.exports = { MySql, DataTypes, Model };