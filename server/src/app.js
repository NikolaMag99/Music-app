const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
// dobijamo info odakle smo pristupili serveru
app.use(morgan('combined'))
app.use(bodyParser.json())
// da ne moze ni jedan klijent da koristi server
app.use(cors())

/*
app.post('/register', (req, res) => {
    res.send({
        message: `cao ${req.body.email}! Registrovani korisnice`
    })
})

*/

app.post('/register',(req, res) => {
    res.send({
        message: `cao ${req.body.email}! Registrovani korisnice`
    })
})
app.listen(process.env.PORT || 8083)
