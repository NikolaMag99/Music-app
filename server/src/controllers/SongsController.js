const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        }
        catch (err) {
            res.status(500).send({
                error: 'Ne moze da pronadje pesmu'
            })
        }
    },
    async post (req, res) {
        try {
           // console.log("Usao")
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'Ne moze da se kreira pesma'
            })
        }
    }
}