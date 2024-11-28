const express = require('express');
const recommendationController = require('../controllers/recommendationController');
const router = express.Router();

// Route for getting outfit recommendations
router.post('/outfit-recommendations', recommendationController.getOutfitRecommendations);

module.exports = router;
