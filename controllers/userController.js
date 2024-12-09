const userRepository = require("../repositories/userRepository");
const cloudinary = require("cloudinary").v2;

// Register User
exports.registerUser = async (req, res) => {
  try {
      const result = await cloudinary.uploader.upload(req.file.path);
    
      const newClient = {
          name: req.body.name,
          age: req.body.age,
          phone: req.body.phone,
          passportNumber: req.body.passportNumber,
          photo: result.secure_url,
          public_id: result.public_id,
          code: req.body.code,
      };
      const client = await userRepository.createUser(newClient);
      res.redirect('/thanks');
    } catch (error) {
        console.log(error)
        res.send('Error Occured, Please Register Again');
    }
};
// Check Approval Status
exports.approvedUsers = async (req, res) => {
  try {
    const users = await userRepository.findApprovedUsers();
    res.render("user/approvedUsers", { users });
  } catch (err) {
    res.redirect("/");
  }
};

// Render Thank You Page
exports.thanks = async (req, res) => {
  try {
    const users = await userRepository.findAllUsers();
    res.render("user/thanks", { users });
  } catch (err) {
    res.redirect("/register");
  }
};