// require grades model
const gradesModel = require('../models/GradesModels');

module.exports = {

  // Call getAll function from Models and store returned data in res.locals.
  getAll(req, res, next) {
    gradesModel.getAll()
      .then((grades) => {
        res.locals.grades = grades;
        next();
      })
      .catch(next);
  },

  // Call getOne function from Models and store returned data in res.locals.
  getOneGrade(req, res, next) {
    gradesModel.getOne(req.params.id)
      .then((grade) => {
        res.locals.grade = grade;
        next();
      })
      .catch(next);
  },

  // Store returned data in res.locals.
  updateGrade(req, res, next) {
    const gradeData = {
      dogs_id: req.body.dogs_id,
      potty_training: req.body.potty_training,
      stay: req.body.stay,
      leash_training: req.body.leash_training,
      sit: req.body.sit,
      quiet: req.body.quiet,
      leave_it: req.body.leave_it,
    };
    gradesModel.updateOne(gradeData)
      .then((grades) => {
        res.locals.grades = grades;
        next();
      })
      .catch(next);
  },

  // create one gradebook for new dog
  createOne(req, res, next) {
    const data = {
      dogs_id: req.body.dogs_id,
      potty_training: req.body.potty_training,
      stay: req.body.stay,
      leash_training: req.body.leash_training,
      sit: req.body.sit,
      quiet: req.body.quiet,
      leave_it: req.body.leave_it,
    };

    gradesModel.newGrade(data)
      .then((grade) => {
        res.locals.grade = grade;
        next();
      })
      .catch(next);
  },

};
