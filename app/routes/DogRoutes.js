const router = require('express')();

const DogController = require('../controllers/DogController');

// get all dogs
router.get('/',
  DogController.getAll,
  (req, res) => res.json({ dogs: res.locals.dogs }));

// get one dog with all information
router.get('/:id',
  DogController.getOneDog,
  (req, res) => res.json({ dog: res.locals.dog }));

// create a new dog student
router.post('/',
  DogController.createOne,
  (req, res) => res.json(res.locals.dogs));

// update dog by id
router.put('/:id',
  DogController.updateDog,
  (req, res) => res.json(res.locals.dog));

// delete dog by id
router.delete('/:id',
  DogController.deleteDog);

module.exports = router;
