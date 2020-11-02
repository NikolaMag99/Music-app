const Joi = require('joi')

module.exports = {
    register (req,res,next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{6,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            res.send(error)
            /*
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Email nije validan'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Format sifre nije okej:
                        <br>
                        1. Dozvoljeni su samo karakteri
                        <br>
                        2. Mora da sadrzi najmanje 6 karaktera, a najvise 32`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Ne valja'
                    })
            }
    */
        } else {
            next()
        }
    }
}