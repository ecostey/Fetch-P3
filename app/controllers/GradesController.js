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

  // Set user input in object 'gradeData' & pass as a parameter to

  // the updateOne function from Models.

  // Store returned data in res.locals.
  updateGrade(req, res, next) {
    const gradeData = {
      dogs_id: req.params.id,
      potty_training: req.body.potty_training,
      stay: req.body.stay,
      leash_training: req.body.leash_training,
      sit: req.body.sit,
      quiet: req.body.quiet,
      leave_it: req.body.leave_it,
      comments: req.body.comment,
    };

    gradesModel.updateOne(gradeData)
      .then((grades) => {
        res.locals.grades = grades;
        next();
      })
      .catch(next);
  },

  createOne(req, res, next) {
    console.log('This is req.body', req.body);
    const data = {
      dogs_id: req.body.id,
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
