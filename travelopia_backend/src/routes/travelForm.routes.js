const express = require('express');
const router = express.Router();

// Import controllers
const { getTravelFormData, postTravelFormData } = require('../controllers/travelForm');

router.get('/',getTravelFormData);
router.post('/',postTravelFormData);

module.exports = router;