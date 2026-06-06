const express = require("express");
const router = express.Router();
const instrutoresController = require("../controllers/instrutoresController");

router.get("/", instrutoresController.listarInstrutores);
router.get("/:id", instrutoresController.obterInstrutor);
router.post("/", instrutoresController.criarInstrutor);
router.put("/:id", instrutoresController.atualizarInstrutor);
router.delete("/:id", instrutoresController.excluirInstrutor);

module.exports = router;