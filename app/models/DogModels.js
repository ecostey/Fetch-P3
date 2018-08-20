const { db, pgp } = require('../config/conn');

module.exports = {

  index() {
    return db.many(`
        SELECT *
        FROM dogs
        `);
  },

  getOneDog(id) {
    return db.one(`
      SELECT *
      FROM dogs
      JOIN gradebook
      ON gradebook.dogs_id = dogs.id
      WHERE gradebook.dogs_id = $1
    `, id)
  }

};
