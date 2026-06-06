const express = require("express");
const router = express.Router();
const turmasController = require("../controllers/turmasController");

router.get("/", turmasController.listarTurmas);
router.get("/:id", turmasController.obtenerTurma);
router.post("/", turmasController.criarTurma);
router.put("/:id", turmasController.atualizarTurma);
router.delete("/:id", turmasController.excluirTurma);

module.exports = router;
