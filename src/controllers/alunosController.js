const alunosModel = require("../models/alunosModel");

const listarAlunos = (req, res) => {
  const alunos = alunosModel.getAll();
  res.status(200).json(alunos);
};

const criarAluno = (req, res) => {
  const novoAluno = alunosModel.create(req.body);
  res.status(201).json(novoAluno);
};

const atualizarAluno = (req, res) => {
  const { id } = req.params;
  const alunoAtualizado = alunosModel.update(id, req.body);

  if (!alunoAtualizado) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  res.status(200).json(alunoAtualizado);
};

module.exports = { listarAlunos, criarAluno, atualizarAluno };
