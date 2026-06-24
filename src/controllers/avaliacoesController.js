const avaliacoesModel = require("../models/avaliacoesModel");

const obter = async (req, res) => {
  try {
    const avaliacoes = await avaliacoesModel.obter();
    return res.status(200).json(avaliacoes);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

const obterPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const avaliacao = await avaliacoesModel.obterPorId(id);

    if (!avaliacao) {
      return res.status(404).json({ mensagem: "Avaliação não encontrada." });
    }

    return res.status(200).json(avaliacao);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

const criar = async (req, res) => {
  try {
    const { data_avaliacao, id_aluno, pontuacoes } = req.body;

    const novaAvaliacao = await avaliacoesModel.criar(
      data_avaliacao,
      id_aluno,
      pontuacoes,
    );

    return res.status(201).json(novaAvaliacao);
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
};

module.exports = { obter, obterPorId, criar };
