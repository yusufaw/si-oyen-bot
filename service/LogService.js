'use strict';

const LogModel = require('../model/LogModel');
const mongoose = require('../lib/db');

const LogService = () => {
    const addLog = data => {
        return new Promise((resolve, reject) => {
            let dt = new LogModel(data);
            dt.save()
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    return {
        addLog: addLog
    }
};

module.exports = LogService();
