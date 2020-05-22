module.exports = {
    environment: 'production',
    port: 7822,
    protocol: 'http',
    TAG: 'production',
    mongo: {
        dbName: 'chat_bot',
        dbUrl: 'mongodb://localhost:27017/',
        use: { useNewParser: true }
    },
    isProd: true,
}