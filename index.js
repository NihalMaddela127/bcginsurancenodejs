const express = require("express");
const app = express();
const config = require("./src/db/config");
const dotenv = require('dotenv');
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded());

// routes

app.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

// add routes
require('./src/routes')(app);

// mongodb connection
const initDB = async () => {
    if (!isConnected()) {
        await config.connect();
    }
}

const isConnected = () => {
  return !!config.client && !!config.client.topology && config.client.topology.isConnected()
}

initDB();

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
});

