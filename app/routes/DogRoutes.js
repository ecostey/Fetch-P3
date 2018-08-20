const router = require('express')();

const DogController = require('../controllers/DogController');

router.get('/',
  DogController.getAll,
  (req, res) => res.json({ dogs: res.locals.dogs }),
);

module.exports = router;
