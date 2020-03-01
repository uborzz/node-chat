const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/chat'
const host = process.env.HOST || 'http://localhost'
const port = process.env.PORT || 3000

module.exports = {
    dbUrl,
    host,
    port,
}