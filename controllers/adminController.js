const cloudinary = require('../config/cloudinary')
const userRepository = require('../repositories/userRepository');
exports.listUsers = async (req, res) => {

    try {
        const users = await userRepository.findPendingUsers();
     
        res.render('admin/users', { users });
    } catch(e) {
        console.log(e);
        res.redirect('/admin/users')
    }
};

exports.approveUser = async (req, res) => {
    try {
        await userRepository.updateUser(req.params.id, { approvalStatus: 'Accepted' });
        res.redirect('admin/users'); 
    } catch(e) {
        console.log(e);
        res.redirect('/admin/users')
    }
};

exports.rejectUser = async (req, res) => {
    try{
        const client = await userRepository.findUserById(req.params.id);
        console.log(client)
        await cloudinary.uploader.destroy(client.public_id);  // Assuming photo is the public_id
        await userRepository.deleteUser(req.params.id)
        res.redirect('/admin/users');
    } catch(err) {
        console.log(err)
        res.redirect('/admin/users')
    }
};
