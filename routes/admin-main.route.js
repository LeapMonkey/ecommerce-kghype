const express = require('express');
const { USER_PREFIX } = require('../configs/app-config');
const userRoute = require('../routes/admin-user.route');

const app = express();

app.use(USER_PREFIX, userRoute);

module.exports = app;