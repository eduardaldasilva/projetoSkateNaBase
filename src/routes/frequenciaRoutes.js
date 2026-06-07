const express = require("express");
const router = express.Router();
const frequenciaController = require("../controllers/frequenciaController");

router.get("/", frequenciaController.listarFrequencias);
router.get("/:id", frequenciaController.obterFrequencia);
router.post("/", frequenciaController.criarFrequencia);
router.put("/:id", frequenciaController.atualizarFrequencia);
router.delete("/:id", frequenciaController.excluirFrequencia);

module.exports = router;
