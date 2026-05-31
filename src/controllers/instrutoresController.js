const instrutoresModel = require("../models/instrutoresModel");

const listarInstrutores = (req, res) => {
  const instrutores = instrutoresModel.getAll();
  res.status(200).json(instrutores);
};

const criarInstrutor = (req, res) => {
  const novoInstrutor = instrutoresModel.create(req.body);
  res.status(201).json(novoInstrutor);
};

const atualizarInstrutor = (req, res) => {
  const { id } = req.params;
  const instrutorAtualizado = instrutoresModel.update(id, req.body);

  if (!instrutorAtualizado) {
    return res.status(404).json({ message: "Instrutor não encontrado" });
  }

  res.status(200).json(instrutorAtualizado);
};

module.exports = { listarInstrutores, criarInstrutor, atualizarInstrutor };
