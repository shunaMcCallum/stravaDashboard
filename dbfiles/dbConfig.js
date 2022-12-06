// const config = {
//     server: "localhost\\MSSQLSERVER",
//     // server: "MSSQLSERVER\\WINDOWS-NSCUTJ3",
//     // server: "localhost\\WINDOWS-NSCUTJ3",
//     authentication: {
//         type: 'default',
//         options: {
//             userName: "strava2",
//             password: "tttt"
//         }
//     },
//     debug: true,
//     driver: 'msnodesqlv8',
//     options: {
//     port: 1433,
//         database: 'TrainingDB',
//         trustServerCertificate: true,
//         trustedConnection: false,
//         enableArithAbort: true
//     }
// }

const config = {
    server: "localhost\\MSSQLSERVER",
    port: 1433,
    user: "strava2",
    password: "tttt",
    database: "TrainingDB",
    driver: 'msnodesqlv8',
    options: {
        enableArithAbort: true,
        trustServerCertificate: true
    },
    connectionTimeout: 150000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    };



module.exports = config;
