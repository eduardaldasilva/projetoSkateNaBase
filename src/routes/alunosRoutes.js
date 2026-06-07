const express = require("express");
const router = express.Router();
const alunosController = require("../controllers/alunosController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, alunosController.listarAlunos);
router.get("/:id", autenticar, alunosController.obterAluno);
router.post(
  "/",
  autenticar,
  autorizar("instrutor"),
  alunosController.criarAluno,
);
router.put(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  alunosController.atualizarAluno,
);
router.delete(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  alunosController.excluirAluno,
);

module.exports = router;
