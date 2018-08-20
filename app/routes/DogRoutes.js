const router = require('express')();

const DogController = require('../controllers/DogController');

router.route('/')
  .get(DogController.getAll,
    (req, res) => res.json({ dogs: res.locals.dogs }),
  );
