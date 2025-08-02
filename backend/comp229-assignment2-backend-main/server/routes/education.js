const express = require('express');
const router = express.Router();
const { 
  getAllEducation, 
  getEducationById, 
  createEducation, 
  updateEducation, 
  deleteEducation 
} = require('../controllers/educationController');
const { requireAuth, requireAdmin } = require('../controllers/authController');

// Public routes
router.get('/', getAllEducation);
router.get('/:id', getEducationById);

// Protected routes (Admin only)
router.post('/', requireAuth, requireAdmin, createEducation);
router.put('/:id', requireAuth, requireAdmin, updateEducation);
router.delete('/:id', requireAuth, requireAdmin, deleteEducation);

module.exports = router;