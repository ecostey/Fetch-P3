// require express
const router = require('express')();

// require grades controller
const GradesController = require('../controllers/GradesController');

// get all grades
router.get('/',
  GradesController.getAll,
  (req, res) => res.json({ grades: res.locals.grades }));

// get one grade
router.get('/:id',
  GradesController.getOneGrade,
  (req, res) => res.json(res.locals.grade));

// create one grade
router.post('/',
  GradesController.createOne,
  (req, res) => res.json(res.locals.grade));

// update one grade
router.put('/:id',
  GradesController.updateGrade,
  (req, res) => res.json(res.locals.grades));


module.exports = router;
