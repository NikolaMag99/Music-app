module.exports = {
    port: process.env.PORT || 8084,
    db: {
        database: process.env.DB_NAME || 'proSkript',
        user: process.env.DB_USER || 'proSkript',
        password: process.env.DB_PASS || 'proSkript',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './proSkript.sqlite'
        }
    },
    //prosledjujemo tajni string koji zna samo server da li je jdb token validan ili ne
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
