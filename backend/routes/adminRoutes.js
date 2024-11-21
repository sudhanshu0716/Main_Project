const express = require('express');
const router = express.Router();
const authenticateAdmin = require('../middlewares/authMiddleware'); // Import the authentication middleware
const LostAndFound = require('../models/LostAndFound');

// Use authenticateAdmin middleware for all routes starting with /admin
router.use('*', authenticateAdmin);

router.post('/reports', async (req, res) => {
    try {
      let { date } = req.body;
  
      // Log the incoming date
      console.log('Received Date: ', date);
  
      // Convert DD-MM-YYYY to YYYY-MM-DD if necessary
      const [day, month, year] = date.split('-');
      const formattedDate = `${year}-${month}-${day}`;
  
      console.log('Formatted Date: ', formattedDate); // Debug the formatted date
  
      const reports = await LostAndFound.find({ date: formattedDate });
      if (reports.length === 0) {
        return res.status(404).json({ message: "No reports found for this date." });
      }
  
      res.status(200).json({ reports });
    } catch (error) {
      console.error('Error fetching reports:', error);
      res.status(500).json({ message: 'Failed to fetch reports.' });
    }
  });
  
  

// Admin-only route to delete an item by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Delete item by ID
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
