const { db } = require('../config/conn');

module.exports = {
  // get all grades for gradebook page
  getAll() {
    return db.many(`
      SELECT *
      FROM gradebook`);
  },

  // get grades for one dog
  // Displayed on puppyProfile page
  getOne(id) {
    return db.one(`
      SELECT *
      FROM gradebook
      WHERE dogs_id = $1`, id);
  },
  // update grades for one dog
  // Accessed through puppyProfile page
  updateOne(data) {
    return db.one(`
      UPDATE gradebook
      SET
      potty_training = $/potty_training/,
      stay = $/stay/,
      leash_training = $/leash_training/,
      sit = $/sit/,
      quiet = $/quiet/,
      leave_it = $/leave_it/,
      comments = $/comments/
      WHERE dogs_id = $/dogs_id/
      RETURNING *`, data);
  },

  newGrade(data) {
    return db.one(`
    INSERT INTO gradebook
    (dogs_id, potty_training, stay, leash_training, sit, quiet, leave_it)
    VALUES
    ($/dogs_id/, $/potty_training/, $/stay/, $/leash_training/, $/sit/, $/quiet/, $/leave_it/)
    RETURNING *
    `, data);
  },

};
