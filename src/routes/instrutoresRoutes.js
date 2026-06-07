const express = require("express");
const router = express.Router();
const instrutoresController = require("../controllers/instrutoresController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, instrutoresController.listarInstrutores);
router.get("/:id", autenticar, instrutoresController.obterInstrutor);
router.post(
  "/",
  autenticar,
  autorizar("instrutor"),
  instrutoresController.criarInstrutor,
);
router.put(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  instrutoresController.atualizarInstrutor,
);
router.delete(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  instrutoresController.excluirInstrutor,
);

module.exports = router;
