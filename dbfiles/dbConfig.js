const config = {
    server: "localhost\\MSSQLSERVER",
    authentication: {
        type: 'default',
        options: {
            userName: "strava2",
            password: "test123456789"
        }
    },
    debug: true,
    driver: 'msnodesqlv8',
    options: {
    port: 1433,
        database: 'TrainingDB',
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true
    }
}

module.exports = config;
