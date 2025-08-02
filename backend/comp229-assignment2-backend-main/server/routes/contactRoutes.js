const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllContacts); // GET all contacts
router.get('/:id', contactController.getContactById); // GET a contact by ID
router.post('/', contactController.createContact); // POST a new contact
router.put('/:id', contactController.updateContact); // PUT (update) a contact by ID
router.delete('/:id', contactController.deleteContact); // DELETE a contact by ID
router.delete('/', contactController.deleteAllContacts); // DELETE all contacts

module.exports = router;