module.exports = {
    environment: 'staging',
    port: 4009,
    protocol: 'http',
    TAG: 'staging',
    mongo: {
        dbName: 'chat_bot',
        dbUrl: 'mongodb://localhost:27017/',
        use: { useNewParser: true }
    },
    isStag: true,
}