const instrutoresModel = require("../models/instrutoresModel");

const obter = async (req, res) => {
  try {
    const instrutores = await instrutoresModel.obter();
    res.status(200).json(instrutores);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar instrutores." });
  }
};

const obterPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const instrutor = await instrutoresModel.obterPorId(id);

    if (!instrutor) {
      return res.status(404).json({ message: "Instrutor não encontrado" });
    }

    res.status(200).json(instrutor);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar instrutor." });
  }
};

const criar = async (req, res) => {
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
      bairro
    );
    res.status(201).json(novoInstrutor);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao criar instrutor." });
  }
};

const atualizar = async (req, res) => {
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
      bairro
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

const excluir = async (req, res) => {
  const { id } = req.params;

  try {
    const instrutorExcluido = await instrutoresModel.excluir(id);

    if (!instrutorExcluido) {
      return res.status(404).json({ message: "Instrutor não encontrado" });
    }

    res.status(200).json({ message: "Instrutor excluído com sucesso." });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao excluir instrutor." });
  }
};

module.exports = { obter, obterPorId, criar, atualizar, excluir };
