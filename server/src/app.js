const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./models/index.js')
const config = require('./config/config')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// dobijamo info odakle smo pristupili serveru
app.use(morgan('combined'))
app.use(bodyParser.json())
// da ne moze ni jedan klijent da koristi server
app.use(cors())
app.use(express.json())

/*
app.post('/register', (req, res) => {
    res.send({
        message: `cao ${req.body.email}! Registrovani korisnice`
    })
})

*/

require('./routes')(app)

db.sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server startovao na portu ${config.port}`)
    })
//app.listen(process.env.PORT || 8085)
