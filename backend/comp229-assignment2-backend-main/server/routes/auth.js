const express = require('express');
const router = express.Router();
const { signin, signout, signup } = require('../controllers/authController');

router.post('/signin', signin);
router.get('/signout', signout);
router.post('/signup', signup);

module.exports = router;
