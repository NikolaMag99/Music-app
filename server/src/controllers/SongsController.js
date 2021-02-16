const {Song} = require('../models')

module.exports = {
    async index(req, res) {
        try {
            let songs = null
            const search = req.query.search
            if (search) {
                songs = await Song.findAll({
                    where: {
                        $or: [
                            'title', 'artist', 'genre', 'album'
                        ].map(key => ({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                songs = await Song.findAll({
                    limit: 10
                })
            }
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'Ne moze da pronadje pesmu'
            })
        }
    },
    async show(req, res) {
        try {
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'Ne moze da pronadje pesmu'
            })
        }
    },
    async post(req, res) {
        try {
            // console.log("Usao")
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'Ne moze da se kreira pesma'
            })
        }
    },
    async put(req, res) {
        try {
            // console.log("Usao")
            const song = await Song.update(req.body, {
                // update samo onu pesmu ciji id menjamo, song id vucemo iz routes
                where: {
                    id: req.params.songId
                }
            })
            res.send(this.body)
        } catch (err) {
            res.status(500).send({
                error: 'Ne moze da uradi update'
            })
        }
    },
    async delete(req, res) {
        console.log("Usao11")
        try {
            console.log("Usao")
            const song = await Song.findByPk(req.params.songId)
            await  Song.destroy({
                where: {
                    id: req.params.songId
                }
            })
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'Ne moze da uradi delete'
            })
        }
    }
}