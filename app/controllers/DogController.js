const dogModel = require('../models/DogModels');

module.exports = {

  // get all of the dogs in the db
  getAll(req, res, next) {

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
      .then((dog) => {
        res.locals.dog = dog;
        next();
      })
      .catch(next);
  },


  // create a new entry to the db
  // createOne(req, res, next) {
  //   const data = {
  //     owner: req.body.owner,
  //     name: req.body.name,
  //     breed: req.body.breed,
  //   }

  // }


  //update the new entry to the db 
  // updateDog( req, res, next) {
  //   const data {
  
  //   }
  // }

  //delete an entry to the db



};
