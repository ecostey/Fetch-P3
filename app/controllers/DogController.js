const dogModel = require('../models/DogModels');

module.exports = {

  // get all of the dogs in the db & save to res.locals
  getAll(req, res, next) {
    debugger;
    dogModel.index()
      .then((dogs) => {
        res.locals.dogs = dogs;
        next();
      })
      .catch(next);
  },

  // get one dog in the data base by id & save returned data to res.locals
  getOneDog(req, res, next) {
    debugger;
    dogModel.getOneDog(req.params.id)
      .then((dogs) => {
        res.locals.dogs = dogs;
        next();
      })
      .catch(next);
  },

  // create a new entry to the dogs table & store data in res.locals
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

  // update one dog's data and store data in res.locals.
  updateDog(req, res, next) {
    const dogData = {
      owner: req.body.owner,
      name: req.body.breed,
      size: req.body.size,
      age: req.body.age,
      picture: req.body.picture,
    };
    dogModel.updateDog(dogData)
      .then((dog) => {
        res.locals.dog = dog;
        next();
      })
      .catch(next);
  },

  // delete one dog from the db
  deleteDog(req, res, next) {
    dogModel.deleteDog(req.params.id)
      .then(() => {
        res.json({ message: 'This entry has been deleted' });
      })

      .catch(next);
  },
};
