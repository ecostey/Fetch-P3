const { db } = require('../config/conn');

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
<<<<<<< HEAD

=======
  // update grades for one dog
  updateOne(data) {
    db.one(`
    UPDATE gradebook
    SET
    potty_traning = $/potty_training/
    stay = $/stay/
    leash_training = $/leash_training/
    sit = $/sit/
    quiet = $/quiet/
    leave_it = $/leave_it/
    comments = $/comments/
    WHERE dog_id = $/dog_id/`, data)
  },
>>>>>>> 967a6658f80bc33e3c3652534819bb4ad09c797a
};
