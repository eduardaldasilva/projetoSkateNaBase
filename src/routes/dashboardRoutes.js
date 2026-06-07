const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/dashboard", autenticar, autorizar("admin"), dashboardController.obterDash);

module.exports = router;
