const { db, pgp } = require('../config/conn');

module.exports = {
  // get all grades
  getAll() {
    db.many(`
    SELECT *
    FROM gradebook`);
  },

  // get grades for one dog
  getOne(id) {
    db.one(`
    SELECT *
    FROM gradebook
    WHERE dogs_id = $1`, id);
  },
};
