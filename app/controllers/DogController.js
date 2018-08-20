const dogModel = require('../models/DogModels');

module.exports = {

  getAll(req, res, next) {
    dogModel.index()
      .then((dogs) => {
        res.locals.dogs = dogs;
        next();
      })
      .catch(next);
  },


};
