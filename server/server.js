const express = require('express');
const dbOperation = require('../dbfiles/dbOperation')
const cors = require('cors');

const bodyParser = require('body-parser');

const API_PORT = process.env.PORT || 5000;
const app = express();

const sql = require('mssql');


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.json());

app.get('/user', async(req, res) => {
    console.log('called userDetails');
    const result = await dbOperation.getUserDetails();
    res.send(result);
})

app.get('/activities', async(req, res) => {
    console.log('called activities');
    const result = await dbOperation.getActivities();
    res.send(result);
})

app.get('/userStats', async(req, res) => {
    console.log('called userStats');
    const result = await dbOperation.getUserStats();
    res.send(result);
})

app.get('/alpeDuZwift', async(req, res) => {
    console.log('called alpeZuZwift');
    const result = await dbOperation.getAlpeDuZwiftEfforts();
    res.send(result);
})

app.get('/thisWeekActivities', async(req, res) => {
    console.log('called thisWeekActivities');
    const result = await dbOperation.getThisWeekActivities();
    res.send(result);
})

app.get('/lastWeekActivities', async(req, res) => {
    console.log('called lastWeekActivities');
    const result = await dbOperation.getLastWeekActivities();
    res.send(result);
})

app.get('/thisMonthActivities', async(req, res) => {
    console.log('called thisMonthActivities');
    const result = await dbOperation.getThisMonthActivities();
    res.send(result);
})

app.get('/lastMonthActivities', async(req, res) => {
    console.log('called lastMonthActivities');
    const result = await dbOperation.getLastMonthActivities();
    res.send(result);
})

app.put('/activities/:id', async(req, res) => {
    console.log('called updateActivity');
    const result = await dbOperation.updateActivityNotes(req);
})


// app.get('/userStatsAll', async(req, res) => {
//     console.log('called userStatsAll');
//     const resultAll = await dbOperation.getUserStatsAll();
//     res.send(resultAll);
// })

// app.get('/userStatsRecent', async(req, res) => {
//     console.log('called userStatsRecent');
//     const resultRecent = await dbOperation.getUserStatsRecent();
//     res.send(resultRecent);
// })

// app.get('/userStatsYtd', async(req, res) => {
//     console.log('called userStatsYtd');
//     const resultYtd = await dbOperation.getUserStatsYtd();
//     res.send(resultYtd);
// })

// dbOperation.getUserStats()
// .then(res => res.json())
// .then(data => console.log(data));


app.listen(API_PORT, function() {
    console.log(`Listening on port ${API_PORT}`);
})