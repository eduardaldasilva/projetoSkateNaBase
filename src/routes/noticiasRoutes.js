const express = require("express");
const router = express.Router();
const noticiasController = require("../controllers/noticiasController");
const { autenticar, autorizar } = require("../middlewares/authMiddleware");

router.get("/", autenticar, noticiasController.obterNoticias);
router.get("/:id", autenticar, noticiasController. obterPorId);
router.post(
  "/",
  autenticar,
  autorizar("instrutor"),
  noticiasController.criar
);

module.exports = router;