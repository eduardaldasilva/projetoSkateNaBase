const express = require("express");
const router = express.Router();
const turmasController = require("../controllers/turmasController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, turmasController.obter);
router.get("/:id", autenticar, turmasController.obterPorId);
router.post("/", autenticar, autorizar("instrutor"), turmasController.criar);
router.put(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  turmasController.atualizar
);
router.delete(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  turmasController.excluir
);

module.exports = router;
