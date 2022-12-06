const config = require('./dbConfig')
const sql = require('mssql/msnodesqlv8');

const getActivities = async() => {
    try {
        let pool = await sql.connect(config);
        let activities = await pool.request().query('SELECT * FROM dbo.UserDetails_Live')
        // console.log(activities);
        return activities;
    }
    catch(error) {
        console.log(error);
    }
}



module.exports = {getActivities}
