'use strict';

const config = require('../.config.js');

const getDatabaseConfig = () => {
    console.log(config);
    return config.database;
}

module.exports = {
    db: getDatabaseConfig
};
