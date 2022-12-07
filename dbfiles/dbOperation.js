const config = require('./dbConfig')
const sql = require('mssql/msnodesqlv8');

const getUserDetails = async() => {
    try {
        let pool = await sql.connect(config);
        let userDetails = await pool.request().query('SELECT Firstname, FORMAT(AccountCreatedAt, \'dd/MM/yyyy\') As AccountCreatedAt, Weight, Ftp FROM dbo.UserDetails_Live')
        // console.log(userDetails);
        return userDetails;
    }
    catch(error) {
        console.log(error);
    }
}

const getActivities = async() => {
    try {
        let pool = await sql.connect(config);
        let activities = await pool.request().query('SELECT * FROM dbo.Activities_Live')
        // console.log(activities);
        return activities;
    }
    catch(error) {
        console.log(error);
    }
}



module.exports = {getUserDetails, getActivities}
