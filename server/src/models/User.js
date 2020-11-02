const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const sq = require('sequelize')

function hashPassword (user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return;
    }
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashSync(user.password,salt,null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        email: {
            type: sq.DataTypes.STRING,
            unique: true,
        },
        password: sq.DataTypes.STRING,
    },{
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    });

    User.prototype.comparePassword = (password, userPassword) => {
        return bcrypt.compareSync(password, userPassword)
    }

    return User;
};
