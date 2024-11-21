const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// Get all images
router.get('/', galleryController.getImages);

// Add an image
router.post('/add', galleryController.addImage);

// Remove an image
router.delete('/remove', galleryController.removeImage);

module.exports = router;
