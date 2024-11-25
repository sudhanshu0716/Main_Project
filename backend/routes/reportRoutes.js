const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Route to submit a report
router.post('/submit', reportController.submitReport);

// Route to get reports for a specific train and date
router.get('/', reportController.getReports);

module.exports = router;
