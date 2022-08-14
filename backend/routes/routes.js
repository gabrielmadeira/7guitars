const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controllerLogin');
const controllerPart = require('../controllers/controllerPart');
const controllerSection= require('../controllers/controllerSection');
router.post('/login', controllerLogin.login);
router.post('/register',controllerLogin.registerUser);
router.get('/getPartsOfType', controllerPart.getPartofType);
router.post('/registerPart',controllerLogin.isAdmin,controllerPart.registerPart);
router.get('/getAllSections',controllerSection.getSections);
router.post('/registerSection',controllerLogin.isAdmin,controllerSection.registerSection);

module.exports = router;

module.exports = router;