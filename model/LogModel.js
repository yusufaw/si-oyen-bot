const mongoose = require('../lib/db');

module.exports = mongoose.model('Log', {
    added_at: Date
});
