const userRepository = require("../repositories/userRepository");
const cloudinary = require("cloudinary").v2;

// Cloudinary Setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Register User
exports.registerUser = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      throw new Error("No photo uploaded.");
    }

    // Upload the file buffer directly to Cloudinary
    const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${req.file.buffer.toString("base64")}`, {
      folder: "uploads", // Adjust folder name as needed
      resource_type: "image", // Specify image upload
      transformation: [{ quality: "auto", fetch_format: "auto" }],
    });

    console.log("Uploaded Image URL:", result.secure_url);

    // Save user data with the photo URL
    const userData = { ...req.body, photo: result.secure_url };
    await userRepository.createUser(userData);

    // Redirect to the thank you page
    res.redirect("/thanks");
  } catch (err) {
    console.error("Error during registration:", err.message);
    res.render("user/register", { error: "Registration failed. Please try again." });
  }
};
// Check Approval Status
exports.checkStatus = async (req, res) => {
  try {
    const user = await userRepository.findUserById(req.session.userId);
    res.render("user/status", { user });
  } catch (err) {
    res.redirect("/list");
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