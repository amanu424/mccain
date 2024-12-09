const express = require("express");
const multer = require("multer");
const userController = require("../controllers/userController");
const router = express.Router();

// Configure multer to use memory storage
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", (req, res) => res.render("index"));

router.get("/approved", (req, res) => {
  const users = [
    { name: "Alemu Byene Lebaw" },
    { name: "Taye Ytebtu Moges" },
    { name: "Jalye Goraw Dersi" },
    { name: "Werku Negeru Arvegna" },
  ];
  res.render("user/approvedUsers", { users });
});

router.get("/register", (req, res) => res.render("user/register"));
router.post("/register", upload.single("photo"), userController.registerUser);
router.get("/status", userController.checkStatus);

router.get("/thanks", userController.thanks);

module.exports = router;