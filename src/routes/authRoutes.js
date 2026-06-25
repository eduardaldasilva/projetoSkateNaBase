const express = require("express");
const path = require("path");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/cadastrar", authController.cadastrar);

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "login.html"));
});

router.post("/login", authController.login);

module.exports = router;