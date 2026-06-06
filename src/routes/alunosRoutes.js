const express = require("express");
const router = express.Router();
const alunosController = require("../controllers/alunosController");

router.get("/", alunosController.listarAlunos);
router.post("/", alunosController.criarAluno);
router.put("/:id", alunosController.atualizarAluno);
router.get("/:id", alunosController.obterAluno);
router.delete("/:id", alunosController.excluirAluno);

module.exports = router;
