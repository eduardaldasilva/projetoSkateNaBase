const alunosModel = require("../models/alunosModel");

const listarAlunos = async (req, res) => {
  try {
    const alunos = await alunosModel.obterAlunos();
    res.status(200).json(alunos);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar alunos." });
  }
};

const criarAluno = async (req, res) => {
  const {
    nome,
    nome_responsavel,
    status_aluno,
    data_nascimento,
    telefone,
    cep,
    logradouro,
    numero,
    bairro,
  } = req.body;

  try {
    const novoAluno = await alunosModel.criar(
      nome,
      nome_responsavel,
      status_aluno,
      data_nascimento,
      telefone,
      cep,
      logradouro,
      numero,
      bairro,
    );
    res.status(201).json(novoAluno);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao criar aluno." });
  }
};

const atualizarAluno = async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    nome_responsavel,
    status_aluno,
    data_nascimento,
    telefone,
    cep,
    logradouro,
    numero,
    bairro,
  } = req.body;

  try {
    const alunoAtualizado = await alunosModel.atualizar(
      id,
      nome,
      nome_responsavel,
      status_aluno,
      data_nascimento,
      telefone,
      cep,
      logradouro,
      numero,
      bairro,
    );

    if (!alunoAtualizado) {
      return res.status(404).json({ message: "Aluno não encontrado" });
    }

    res.status(200).json(alunoAtualizado);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao atualizar aluno." });
  }
};

module.exports = { listarAlunos, criarAluno, atualizarAluno };
