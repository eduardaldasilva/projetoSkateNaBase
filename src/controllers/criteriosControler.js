const criteriosModel = require("../models/criteriosModel");

const obterCriterios = async (req, res) => {
  try {
    const criterios = await criteriosModel.obterCriterios();
    return res.status(200).json(criterios);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

const obterAvaliacao = async (req, res) => {
  try {
    const { id } = req.params;
    const criterios = await criteriosModel.obterAvaliacao(id);

    if (!criterios || criterios.length === 0) {
      return res
        .status(404)
        .json({ mensagem: "Critérios não encontrados para esta avaliação." });
    }

    return res.status(200).json(criterios);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

module.exports = { obterCriterios, obterAvaliacao };
