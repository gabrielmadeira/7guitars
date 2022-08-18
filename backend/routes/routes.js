const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controllerLogin');
const controllerPart = require('../controllers/controllerPart');
const controllerSection= require('../controllers/controllerSection');
router.post('/login', controllerLogin.login);
router.post('/register',controllerLogin.registerUser);
router.get('/getPartsOfType', controllerPart.getPartofType);
router.get('/getAllSections',controllerSection.getSections);
router.get('/all',controllerLogin.allUsers);

router.post('/registerPart',controllerLogin.isAdmin,controllerPart.registerPart);
router.put('/updateQuant',controllerLogin.isAdmin,controllerPart.updateQuantity);
router.delete('/deletePart',controllerLogin.isAdmin,controllerPart.deletePart);
router.post('/registerSection',controllerLogin.isAdmin,controllerSection.registerSection);
module.exports = router;

