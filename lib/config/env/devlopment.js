module.exports = {
    environment: "development",
    port: 4009,
    protocol: 'http',
    TAG: 'development',
    mongo: {
        dbName: 'school',
        dbUrl: "mongodb://localhost:27017/",
        use: { useNewParser: true },
        options: {

        }
    }
}