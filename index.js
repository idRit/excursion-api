const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { 
    PORT, 
    MONGO_CON_URL, 
    DB_NAME,
} = require("./config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(MONGO_CON_URL, {
    dbName: DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    console.log(err);
    process.exit();
});

//default
app.get('/', (req, res) => {
    //do something
    res.json({
        status: 'working'
    })
});

app.listen(PORT);
console.log(`Listening on port: ${PORT}`);