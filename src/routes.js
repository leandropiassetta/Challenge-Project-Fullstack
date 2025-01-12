const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');

router.get('/home', homeController.viewHome);
router.post('/saveUser', homeController.saveUSer);

module.exports = router;
