const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/users', adminController.listUsers);
router.post('/approve/:id', adminController.approveUser);
router.post('/reject/:id', adminController.rejectUser);

module.exports = router;
