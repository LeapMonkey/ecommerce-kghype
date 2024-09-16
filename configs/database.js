const mongoose = require('mongoose');
const { DB_PATH } = require('../configs/app-config');

exports.connect = () => {
    // DB Connect

    mongoose.connect(DB_PATH, {
        useNewUrlParser: true, useUnifiedTopology: true
    })

    //Get the default connection
    var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}