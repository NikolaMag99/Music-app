const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
    .readdirSync(__dirname) //citam trenutni direktorijum i daje mi fajlove
    .filter((file) =>
        file !== 'index.js' //sve sem indexa
    )
    .forEach((file) => {
        //deklarisem model
      //  const model = sequelize.import(path.join(__dirname,file))
        const model = require(path.join(__dirname,file))(sequelize, sequelize.DataTypes)
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db