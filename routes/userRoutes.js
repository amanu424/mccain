const express = require("express");
const multer = require("multer");
const userController = require("../controllers/userController");
const router = express.Router();
const upload = require('../middlewares/multer.js');

router.get("/", (req, res) => res.render("index"));

router.get("/approved", userController.approvedUsers);

router.get("/register", (req, res) => res.render("user/register"));
router.post("/register", upload.single("photo"), userController.registerUser);
// router.get("/status", userController.checkStatus);

router.get("/thanks", userController.thanks);

module.exports = router;