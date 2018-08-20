const router = require('express')();

const DogController = require('../controllers/DogController');

// get all dogs
router.get('/',
  DogController.getAll,
  (req, res) => res.json({ dogs: res.locals.dogs }));

// get one dog with all information
router.get('/',
  DogController.getOne,
  (req, res) => res.json({ dogs: res.locals.dog }));

// create a new dog student
router.post('/',
  DogController.newDog,
  (req, res) => res.json({ dogs: res.locals.dogs }));

// update dog by id
router.put('/:id',
  DogController.updateDog,
  (req, res) => res.json({ dogs: res.locals.dogs }));

// delete dog by id
router.delete('/:id',
  DogController.deleteDog,
  (req, res) => res.json({ message: 'dog deleted' }));

module.exports = router;
