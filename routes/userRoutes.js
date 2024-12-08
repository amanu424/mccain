const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => res.render('index'));

router.get('/approved', (req, res) => res.render('user/approvedUsers'));

router.get('/register', (req, res) => res.render('user/register'));
router.post('/register', upload.single('photo'), userController.registerUser);
router.get('/status', userController.checkStatus);

module.exports = router;
