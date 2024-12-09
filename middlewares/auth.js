const checkAuth = (req, res, next) => {
	if(req.session && req.session.admin) {
		return next()
	}

	res.redirect('/')
}

module.exports = checkAuth