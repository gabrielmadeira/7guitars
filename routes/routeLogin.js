const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerLogin');
router.get('/login', controller.getUser);
router.post('/login',controller.sendUser);



module.exports = router;