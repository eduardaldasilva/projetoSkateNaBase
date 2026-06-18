const express = require("express");
const router = express.Router();
const frequenciasController = require("../controllers/frequenciasController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, frequenciasController.obter);
router.get("/:id", autenticar, frequenciasController.obterPorId);
router.post(
  "/",
  autenticar,
  autorizar("instrutor"),
  frequenciasController.criar
);
router.put(
  "/:id",
  autenticar,
  autorizar("instrutor"),
  frequenciasController.atualizar
);

module.exports = router;
