const cloudinary = require('../config/cloudinary')
const userRepository = require('../repositories/userRepository');
exports.listUsers = async (req, res) => {
    const users = await userRepository.findPendingUsers();
 
    res.render('admin/users', { users });
};

exports.approveUser = async (req, res) => {
    await userRepository.updateUser(req.params.id, { approvalStatus: 'Accepted' });
    res.render('admin/users');
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
        res.json({err: err})
    }
};
