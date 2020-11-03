const sq = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    const Song = sequelize.define('Song', {
        title: sq.DataTypes.STRING,
        artist: sq.DataTypes.STRING,
        genre: sq.DataTypes.STRING,
        album: sq.DataTypes.STRING,
        albumImageUrl: sq.DataTypes.STRING,
        youtubeId: sq.DataTypes.STRING,
        lyrics: sq.DataTypes.TEXT,
        tab: sq.DataTypes.TEXT,
    })

    return Song;
}
