'use strict';

module.exports = {
    db: () => {
        return {
          connection: process.env.MONGO_URL,
          database: process.env.MIMIKU_DB
        };
    }
};
