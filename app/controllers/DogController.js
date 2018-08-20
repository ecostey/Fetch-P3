const dogModel = require('../models/DogModels');

module.exports = {

  // get all of the dogs in the db
  getAll(req, res, next) {
    debugger;
    dogModel.index()
      .then((dogs) => {
        res.locals.dogs = dogs;
        next();
      })
      .catch(next);
  },

  // get one dog in the data base by id

  getOneDog(req, res, next) {
    debugger;
    dogModel.getOneDog(req.params.id)
      .then((dogs) => {
        res.locals.dogs = dogs;
        next();
      })
      .catch(next);
  },


  // create a new entry to the db
  createOne(req, res, next) {
    const data = {
      owner: req.body.owner,
      name: req.body.name,
      breed: req.body.breed,
      size: req.body.size,
      age: req.body.age,
      picture: req.body.picture,
    };

    dogModel.createOne(data)
      .then((dogs) => {
        res.locals.dogs = dogs;
        next();
      })
      .catch(next);
  },

  // update the new entry to the db
  updateDog(req, res, next) {
    const data = {
      owner: req.body.owner,
      name: req.body.breed,
      size: req.body.size,
      age: req.body.age,
      picture: req.body.picture,
    };
    dogModel.updateDog(data)
      .then((dog) => {
        res.locals.dog = dog;
        next();
      })
      .catch(next);
  },

  // delete an entry to the db
  deleteDog(req, res, next) {
    dogModel.deleteDog(req.params.id)
      .then(() => {
        res.json({ message: 'This entry has been deleted' });
      })

      .catch(next);
  },
};
