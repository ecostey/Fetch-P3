const { db, pgp } = require('../config/conn');

module.exports = {

  index() {
    return db.many(`
        SELECT *
        FROM dogs
        `);
  },

};
