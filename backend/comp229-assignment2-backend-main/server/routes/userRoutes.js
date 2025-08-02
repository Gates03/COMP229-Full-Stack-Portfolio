const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers); // GET all users
router.get('/:id', userController.getUserById); // GET a user by ID
router.post('/', userController.createUser); // POST a new user
router.put('/:id', userController.updateUser); // PUT (update) a user by ID
router.delete('/:id', userController.deleteUser); // DELETE a user by ID
router.delete('/', userController.deleteAllUsers); // DELETE all users

module.exports = router;