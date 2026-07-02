const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const { autenticar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, dashboardController.obterDash);

module.exports = router;
