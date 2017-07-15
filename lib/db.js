'use strict';

const config = require('./config');
const mongoose = require('mongoose');
const mongoConfig = config.db();

const connection = mongoConfig.connection + mongoConfig.database;
console.log(connection);
mongoose.connect(connection);

module.exports = mongoose;
