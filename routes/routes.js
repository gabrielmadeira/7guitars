const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/controller');
router.get('/login', visitorController.login);
router.post('/login',visitorController.loginCheck);

router.get('/signup', visitorController.signupShow);
router.post('/signup',visitorController.createAccount);

router.get('/logoff', visitorController.logoff);

router.get('/',visitorController.isLogged,visitorController.home);

router.get("*",visitorController.error404);


module.exports = router;