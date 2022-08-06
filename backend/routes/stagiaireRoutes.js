const router = require('express').Router();
const { addStagiaire, getStagiaireById, getStagiaires, updateStagiaire, deleteStagiaire } = require('../controllers/stagiaireController')

router.get('/',getStagiaires)
router.get('/:id',getStagiaireById)
router.post('/',addStagiaire)
router.put('/:id',updateStagiaire)
router.delete('/:id',deleteStagiaire)

module.exports = router;