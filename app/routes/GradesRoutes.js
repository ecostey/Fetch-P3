const router = require('express')();

const GradesController = require('../controllers/GradesController');

router.get('/',
  GradesController.getAll,
  (req, res) => res.json({ grades: res.locals.grades }));

router.get('/',
  GradesController.getOne,
  (req, res) => res.json({ grades: res.locals.grades }));

router.post('/',
  GradesController.newGrade,
  (req, res) => res.json({ grades: res.locals.grades }));

router.put('/:id',
  GradesController.updateGrade,
  (req, res) => res.json({ grades: res.locals.grades }));

router.delete('/:id',
  GradesController.deleteGrade,
  (req, res) => res.json({ message: 'Grade deleted' }));

module.exports = router;
