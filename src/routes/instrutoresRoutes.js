const express = require("express");
const router = express.Router();
const instrutoresController = require("../controllers/instrutoresController");

router.get("/", instrutoresController.listarInstrutores);
router.post("/", instrutoresController.criarInstrutor);
router.put("/:id", instrutoresController.atualizarInstrutor);

module.exports = router;
