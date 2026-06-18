const express = require("express");
const router = express.Router();
const turmasController = require("../controllers/turmasController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, turmasController.listarTurmas);
router.get("/:id", autenticar, turmasController.obterTurma);
router.post("/", autenticar, autorizar("instrutor"), turmasController.criarTurma);
router.put(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  turmasController.atualizarTurma
);
router.delete(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  turmasController.excluirTurma
);

module.exports = router;
