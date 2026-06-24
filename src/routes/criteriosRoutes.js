const express = require("express");
const router = express.Router();
const criteriosController = require("../controllers/criteriosController");
const { autenticar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, criteriosController.obterCriterios);
router.get("/:id", autenticar, criteriosController.obterAvaliacao);

module.exports = router;