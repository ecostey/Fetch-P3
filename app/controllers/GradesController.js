const gradesModel = require('../models/GradesModels');

module.exports = {

  getAll(req, res, next) {
    gradesModel.getAll()
      .then((grades) => {
        res.locals.grades = grades;
      })
      .catch(next);
  },

};
