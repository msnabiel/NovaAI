const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');
const iconController = require('../controllers/iconController');
const fontController = require('../controllers/fontController');
const textController = require('../controllers/textController');

// Define routes
router.get('/colors', colorController.getColors);
router.get('/icons', iconController.getIcons);
router.get('/fonts', fontController.getFonts);
router.post('/text', textController.generateText);

module.exports = router;
