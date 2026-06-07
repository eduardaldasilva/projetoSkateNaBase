const express = require("express");
const router = express.Router();
const alunosController = require("../controllers/alunosController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, alunosController.listarAlunos);
router.get("/:id", autenticar, alunosController.obterAluno);
router.post("/", autenticar, autorizar("admin"), alunosController.criarAluno);
router.put(
  "/:id",
  autenticar,
  autorizar("admin"),
  alunosController.atualizarAluno,
);
router.delete(
  "/:id",
  autenticar,
  autorizar("admin"),
  alunosController.excluirAluno,
);

module.exports = router;
