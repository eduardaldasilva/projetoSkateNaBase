const express = require("express");
const router = express.Router();
const frequenciaController = require("../controllers/frequenciaController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, frequenciaController.listarFrequencias);
router.get("/:id", autenticar, frequenciaController.obterFrequencia);
router.post(
  "/",
  autenticar,
  autorizar("instrutor", "instrutor"),
  frequenciaController.criarFrequencia,
);
router.put(
  "/:id",
  autenticar,
  autorizar("instrutor", "instrutor"),
  frequenciaController.atualizarFrequencia,
);

module.exports = router;
