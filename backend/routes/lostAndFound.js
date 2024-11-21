const express = require('express');
const router = express.Router();
const lostAndFoundController = require('../controllers/lostAndFoundController');

// Report a found item
router.post('/report-found', lostAndFoundController.reportFoundItem);

// Search lost items
router.post('/search-lost', lostAndFoundController.searchLostItems);

// Mark item as founded
router.patch('/mark-as-founded/:id', lostAndFoundController.markAsFounded);

// Get all founded items
router.get('/founded-items', lostAndFoundController.getFoundedItems);

module.exports = router;
