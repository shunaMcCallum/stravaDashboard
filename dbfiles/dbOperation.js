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



module.exports = {getUserDetails, getActivities, getUserStats, getUserStatsAll, getUserStatsRecent, getUserStatsYtd}
