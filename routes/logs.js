const express = require('express');
const router = express.Router();
const LogService = require('../service/LogService');

router.get('/', function(req, res, next) {

    kitty.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meow');
        }
    });
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    let log = {
        'added_at': new Date()
    };
    LogService.addLog(log)
        .then(result => {
            res.send('Success : ' + log.added_at);
        })
        .catch(err => {
            res.send('Error:' + err.message);
        })
});

module.exports = router;
