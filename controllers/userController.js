const userRepository = require('../repositories/userRepository');
const cloudinary = require('cloudinary').v2;

// Cloudinary Setup
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Register User
exports.registerUser = async (req, res) => {
    try {
        // Upload image to Cloudinary in the "mccain foods" folder
        const result = await cloudinary.uploader.upload_stream({
            folder: 'mccain foods',  // Specify the folder where the image should go
            transformation: [{ quality: "auto", fetch_format: "auto" }] // Automatically compress image
        }).end(req.file.buffer);

        const userData = { ...req.body, photo: result.secure_url };
        await userRepository.createUser(userData);

        res.render('user/thanks', { message: 'Thanks for submitting. We will notify you soon!' });
    } catch (err) {
        res.render('user/register', { error: 'Registration failed. Try again.' });
    }
};

// Check Approval Status
exports.checkStatus = async (req, res) => {
    try {
        const user = await userRepository.findUserById(req.session.userId);
        res.render('user/status', { user });
    } catch (err) {
        res.redirect('/list');
    }
};
