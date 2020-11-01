/*
module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        email: {
            type: DataTypes.String,
            unique: true,
        },
        password: DataTypes.String
    })
 */

const sq = require('sequelize')
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        email: {
            type: sq.DataTypes.STRING,
            unique: true,
        },
        password: sq.DataTypes.STRING,
    });

    return User;
};
