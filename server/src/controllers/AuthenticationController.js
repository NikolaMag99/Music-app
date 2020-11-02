const {User} = require('../models')
// za cuvanje podataka u memoriji
const jwt = require('jsonwebtoken')
const config = require('../config/config')

//prosledjujemo tajni string koji zna samo server da li je jdb token validan ili ne
//ima li potrebe za ovim uopste?
// i ako ima da li zelimo da koristimo taj token i hesiramo ga radi zastite i proveravamo posle
// da li je to ta sifra u hesu
//i ako to radimo je l treba da koristimo vuex radi pracenje tih podataka sve vreme??
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 *7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
  async register (req, res,next) {
     // User.create(req.body).then((response) =>{
     //     res.send(response)
     // } ).catch((error) => {
     //     res.send(error)
     // })
        try {
            // const user = await User.create(req.body)
            //
            // const userJson = user.toJSON()
            // res.send({
            //     user: userJson,
            //     token: jwtSignUser(userJson)
            // })
            const user = await User.create(req.body)
            res.json(user)
        } catch (error) {
            next(error);
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
               return  res.status(403).send({
                    error: 'Los unos'
                })
            }
            const isPassValid = await user.comparePassword(password)
            if (!isPassValid) {
                return  res.status(403).send({
                    error: 'Los unos'
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(500).send({
                error: 'Puklo sve'
            })
        }
    }
}