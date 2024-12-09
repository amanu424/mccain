const express = require('express');
const adminController = require('../controllers/adminController');
const Admin = require('../models/Admin.js');
const router = express.Router();
const auth = require('../middlewares/auth.js')



router.get('/users', auth, adminController.listUsers);
router.post('/approve/:id', auth, adminController.approveUser);
router.post('/reject/:id', auth, adminController.rejectUser);


router.get('/login', (req, res) => {
	if(req.session && req.session.admin) {
		return res.redirect('/admin/users')
	}
	res.render('admin/login')
})
router.post('/login', async (req, res) => {
	try{
		const beyene = await Admin.findOne({username: req.body.username, password: req.body.password })
		if(beyene) {
			req.session.admin = true
			res.redirect('/admin/users')
		} else {
			res.redirect('/admin/login')
		}

	} catch (err) {
		res.redirect('/admin/login')
	}
})
module.exports = router;
