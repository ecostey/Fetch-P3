const gradesModel = require('../models/GradesModels');

module.exports = {

  getAll(req, res, next) {
    gradesModel.getAll()
      .then((grades) => {
        res.locals.grades = grades;
      })
      .catch(next);
  },

  getOneGrade(req, res, next) {
    gradesModel.getOne()
      .then((grade) => {
        res.locals.grade = grade;
      })
      .catch(next);
  },

  updateGrade(req, res, next) {
    const gradeData = {
      potty_training: req.body.potty_training,
      stay: req.body.stay,
      leash_training: req.body.leash_training,
      sit: req.body.sit,
      quiet: req.body.quiet,
      leave_it: req.body.leave_it,
      comment: req.body.comment,
    },

    gradesModel.updateOne(gradeData)
      .then(grade => {
        res.locals.grade = grade;
        next();
      });
  }

};