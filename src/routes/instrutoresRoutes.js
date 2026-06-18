const express = require("express");
const router = express.Router();
const instrutoresController = require("../controllers/instrutoresController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, instrutoresController.obter);
router.get("/:id", autenticar, instrutoresController.obterPorId);
router.post(
  "/",
  autenticar,
  autorizar("instrutor"),
  instrutoresController.criar
);
router.put(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  instrutoresController.atualizar
);
router.delete(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  instrutoresController.excluir
);

module.exports = router;
