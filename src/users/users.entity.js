const {DataTypes,Model} = require('../connections/snakedb.mysql.sequelize');

class User extends Model {
    static init(sequelize) {
        return super.init({
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            fullname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            modelName: "usuarios",
            sequelize,
            timestamps: false,
            createdAt: false,
            updatedAt: false
        });
    }
    static getId(where) {
        return this.findByPk(where);
    }
    static updateId(set, where) {
        return this.update(set, {
            where: { username: where }
        });
    }
}

module.exports = {User};