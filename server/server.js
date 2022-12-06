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

app.get('/api', async(req, res) => {
    console.log('called');
    const result = await dbOperation.getActivities();
    res.send(result);
})

// dbOperation.getActivities()
// .then(res => res.json())
// .then(data => console.log(data));


app.listen(API_PORT, function() {
    console.log(`Listening on port ${API_PORT}`);
})