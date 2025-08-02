const Education = require('../models/education');

// GET all education records
exports.getAllEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1 });
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET education by ID
exports.getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ message: 'Education record not found' });
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new education record
exports.createEducation = async (req, res) => {
  const newEducation = new Education({
    ...req.body,
    updatedAt: new Date()
  });

  try {
    const savedEducation = await newEducation.save();
    res.status(201).json(savedEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update education record
exports.updateEducation = async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    if (!updatedEducation) return res.status(404).json({ message: 'Education record not found' });
    res.json(updatedEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE education record
exports.deleteEducation = async (req, res) => {
  try {
    const deletedEducation = await Education.findByIdAndDelete(req.params.id);
    if (!deletedEducation) return res.status(404).json({ message: 'Education record not found' });
    res.json({ message: 'Education record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};