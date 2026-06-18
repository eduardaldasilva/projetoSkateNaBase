const express = require("express");
const router = express.Router();
const alunosController = require("../controllers/alunosController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, alunosController.obter);
router.get("/:id", autenticar, alunosController.obterPorId);
router.post(
  "/",
  autenticar,
  autorizar("instrutor"),
  alunosController.criar
);
router.put(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  alunosController.atualizar
);
router.delete(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  alunosController.excluir
);

module.exports = router;
