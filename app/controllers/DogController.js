// require dog model
const dogModel = require('../models/DogModels');

module.exports = {

  // get all of the dogs in the DB
  getAll(req, res, next) {
    dogModel.index()
      .then((dogs) => {
        res.locals.dogs = dogs;
        next();
      })
      .catch(next);
  },

  // get one dog in the DB by id
  getOneDog(req, res, next) {
    dogModel.getOneDog(req.params.id)
      .then((dog) => {
        res.locals.dog = dog;
        next();
      })
      .catch(next);
  },


  // create a new dog in the DB
  createOne(req, res, next) {
    const data = {
      owner: req.body.owner,
      name: req.body.name,
      breed: req.body.breed,
      size: req.body.size,
      age: req.body.age,
      picture: req.body.picture,
    };
    dogModel.newDog(data)
      .then((dog) => {
        res.locals.dog = dog;
        next();
      })
      .catch(next);
  },

  // update dog
  updateDog(req, res, next) {
    const data = {
      id: req.body.id,
      breed: req.body.breed,
      owner: req.body.owner,
      name: req.body.name,
      size: req.body.size,
      age: req.body.age,
      picture: req.body.picture,
    };
    dogModel.updateDog(data)
      .then((dog) => {
        res.locals.dog = dog;
        res.json(res.locals.dog);
        next();
      })
      .catch(next);
  },

  // delete dog from DB
  deleteDog(req, res, next) {
    dogModel.deleteDog(req.params.id)
      .then(() => {
        res.json({ message: 'This entry has been deleted' });
      })

      .catch(next);
  },
};
