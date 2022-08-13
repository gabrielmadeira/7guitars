const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controllerLogin');
const controllerPart = require('../controllers/controllerPart');
router.post('/login', controllerLogin.login);
router.post('/register',controllerLogin.registerUser);
router.get('/getPartsOfType', controllerPart.getPartofType);
router.post('/registerPart',controllerLogin.isAdmin,controllerPart.registerPart);
module.exports = router;

module.exports = router;