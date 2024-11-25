const express = require('express');
const router = express.Router();
const authenticateAdmin = require('../middlewares/authMiddleware');
const LostAndFound = require('../models/LostAndFound');

// Use authenticateAdmin middleware for all routes

router.post('/reports', async (req, res) => {
  try {
    const { date } = req.body;

    const reports = await LostAndFound.find({ date });
    if (reports.length === 0) {
      return res.status(404).json({ message: 'No reports found for this date.' });
    }

    res.status(200).json({ reports });
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ message: 'Failed to fetch reports.' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await LostAndFound.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    res.status(200).json({ message: 'Item successfully deleted.' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Failed to delete item.' });
  }
});

module.exports = router;
