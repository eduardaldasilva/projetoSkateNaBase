const express = require("express");
const router = express.Router();
const avaliacoesController = require("../controllers/avaliacoesController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, avaliacoesController.obter);
router.get("/:id", autenticar, avaliacoesController.obterPorId);
router.post(
  "/",
  autenticar,
  autorizar("instrutor"),
  avaliacoesController.criar
);

module.exports = router;