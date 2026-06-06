const instrutoresModel = require("../models/instrutoresModel");

const listarInstrutores = async (req, res) => {
  try {
    const instrutores = await instrutoresModel.obterInstrutores();
    res.status(200).json(instrutores);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar instrutores." });
  }
};

const criarInstrutor = async (req, res) => {
  const { nome, status_instrutor, telefone, cep, logradouro, numero, bairro } =
    req.body;

  try {
    const novoInstrutor = await instrutoresModel.criar(
      nome,
      status_instrutor,
      telefone,
      cep,
      logradouro,
      numero,
      bairro,
    );
    res.status(201).json(novoInstrutor);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao criar instrutor." });
  }
};

const atualizarInstrutor = async (req, res) => {
  const { id } = req.params;
  const { nome, status_instrutor, telefone, cep, logradouro, numero, bairro } =
    req.body;

  try {
    const instrutorAtualizado = await instrutoresModel.atualizar(
      id,
      nome,
      status_instrutor,
      telefone,
      cep,
      logradouro,
      numero,
      bairro,
    );

    if (!instrutorAtualizado) {
      return res.status(404).json({ message: "Instrutor não encontrado" });
    }

    res.status(200).json(instrutorAtualizado);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao atualizar instrutor." });
  }
};

module.exports = { listarInstrutores, criarInstrutor, atualizarInstrutor };
