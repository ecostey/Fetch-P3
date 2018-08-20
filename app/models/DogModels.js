const { db, pgp } = require('../config/conn');

module.exports = {

  index() {
    return db.many(`
        SELECT *
        FROM dogs
        `);
  },

  getOne(id) {
    return db.one(`
      SELECT *
      FROM dogs
      WHERE id = $1`, id);
  },

};
