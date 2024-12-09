const userRepository = require('../repositories/userRepository');
exports.listUsers = async (req, res) => {
    const users = await userRepository.findAllUsers();
 
    res.render('admin/users', { users });
};

exports.approveUser = async (req, res) => {
    await userRepository.updateUser(req.params.id, { approvalStatus: 'Accepted' });
    res.redirect('/admin/users');
};

exports.rejectUser = async (req, res) => {
    await userRepository.updateUser(req.params.id, { approvalStatus: 'Rejected' });
    res.redirect('/admin/users');
};
