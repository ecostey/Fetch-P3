const router = require('express')();

const DogController = require('../controllers/DogController');

// get all dogs
router.get('/', DogController.getAll);

// get one dog with all information
router.get('/', DogController.getOne);

// create a new dog student
router.post('/', DogController.newDog);

// update dog by id
router.put('/:id', DogController.updateDog);

// delete dog by id
router.delete('/:id', DogController.deleteDog);

module.exports = router;
