const dashboardModel = require("../models/dashboardModel");

const obterDash = async (req, res) => {
  try {
    const dashboard = await dashboardModel.obterDash();
    res.status(200).json(dashboard);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao carregar o dashboard." });
  }
};

module.exports = { obterDash };
