const express = require('express');
const router  = express.Router();
const modelController = require('../controllers/model');

router.get('/model', modelController.getAllModels);
router.post('/model', modelController.uploadModel, modelController.newModel);
router.get('/model/:title', modelController.getOneModel);

module.exports = router;