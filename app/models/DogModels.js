const { db, pgp } = require('../config/conn');

module.exports = {

  // Query for ALL dogs.
  // Will be displayed on the Landing page.
  index() {
    return db.many(`
        SELECT *
        FROM dogs
        `);
  },

  // Query for ONE dog & dog's grades by dog's ID.
  // Will be displayed on the puppyProfile page.
  getOneDog(id) {
    return db.one(`
      SELECT *
      FROM dogs
      JOIN gradebook
      ON gradebook.dogs_id = dogs.id
      WHERE dogs.id = $1
    `, id);
  },
  
  // Query creates & adds one new dog to dogs Table
  // Will be used in the 'Create New Dog Form', accessable through the landing pg.
  newDog(dog) {
    return db.one(`
      INSERT INTO dogs
      (owner, name, breed, size, age, picture)
      VALUES ($/owner/, $/name/, $/breed/, $/size/, $/age/, $/picture/)
      RETURNING *
      `, dog);
  },

  // Query to update a dog's data in the dog's table
  // Update form will be accessed through puppyProfile page
  updateDog(id) {
    return db.one(`
      UPDATE dogs
      SET 
      owner=$/owner/,
      name=$/name/,
      breed=$/breed/,
      size=$/size/,
      age=$/age/,
      picture=$/picture/
      WHERE id = $/id/
      RETURNING *
      `, id);
  },

  // Query to Delete a dog from dog's table and gradebook table
  // Accessed through puppyProfile page
  deleteDog(id) {
    return db.none(`
    DELETE FROM dogs
    WHERE id = $/id/
    `, id);
 },

};

