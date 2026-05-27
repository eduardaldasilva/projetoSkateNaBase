const express = require("express");
const router = express.Router();
const alunosController = require("../controllers/alunosController");

router.get("/", alunosController.listarAlunos);
router.post("/", alunosController.criarAluno);
router.put("/:id", alunosController.atualizarAluno);

module.exports = router;
