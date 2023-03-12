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
        let activities = await pool.request().query('SELECT * FROM dbo.Activities_Live_New ORDER BY [start_date_local] DESC')
        //let activities = await pool.request().query('SELECT * FROM dbo.Activities_Live')
        //let activities = await pool.request().query('SELECT * FROM dbo.Activities_Live_New')
        //console.log(activities);
        return activities;
    }
    catch(error) {
        console.log(error);
    }
}

const getUserStatsAll = async() => {
    try {
        let pool = await sql.connect(config);
        let userStats = await pool.request().query('SELECT * FROM dbo.App_UserStats')
        // console.log(userStats);
        return userStats;
    }
    catch(error) {
        console.log(error);
    }
}

const getUserStatsRecent = async() => {
    try {
        let pool = await sql.connect(config);
        let userStats = await pool.request().query('SELECT * FROM dbo.App_UserStats_Recent')
        // console.log(userStats);
        return userStats;
    }
    catch(error) {
        console.log(error);
    }
}

const getUserStatsYtd = async() => {
    try {
        let pool = await sql.connect(config);
        let userStats = await pool.request().query('SELECT * FROM dbo.App_UserStats_Ytd')
        // console.log(userStats);
        return userStats;
    }
    catch(error) {
        console.log(error);
    }
}

const getUserStats = async() => {
    try {
        let pool = await sql.connect(config);
        let userStats = await pool.request().query('SELECT * FROM dbo.App_UserStats')
        // console.log(userStats);
        return userStats;
    }
    catch(error) {
        console.log(error);
    }
}

const getAlpeDuZwiftEfforts = async() => {
    try {
        let pool = await sql.connect(config);
        let userStats = await pool.request().query('SELECT * FROM dbo.AlpeDuZwift_Live ORDER BY [start_date_local] DESC')
        // console.log(userStats);
        return userStats;
    }
    catch(error) {
        console.log(error);
    }
}

const updateActivityNotes = async(req) => {
    try {
        let pool = await sql.connect(config);
        let query = await pool.request().query(`UPDATE dbo.Activities_Live_New SET Notes = '${req.body.Notes}' WHERE id = ${req.body.Id}`);
        return query;
    }
    catch(error) {
        console.log(error);
    }
}



module.exports = {getUserDetails, getActivities, getUserStats, getUserStatsAll, getUserStatsRecent, getUserStatsYtd, getAlpeDuZwiftEfforts, updateActivityNotes}
