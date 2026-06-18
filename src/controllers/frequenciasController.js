const frequenciasModel = require("../models/frequenciasModel");

const obter = async (req, res) => {
  try {
    const frequencias = await frequenciasModel.obter();
    res.status(200).json(frequencias);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar registros de frequência." });
  }
};

const obterPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const frequencia = await frequenciasModel.obterPorId(id);
    if (!frequencia)
      return res.status(404).json({ message: "Registro não encontrado" });
    res.status(200).json(frequencia);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar registro de frequência." });
  }
};

const criar = async (req, res) => {
  const { id_aluno, data_registro, status_presenca } = req.body;
  try {
    const novaFrequencia = await frequenciasModel.criar(
      id_aluno,
      data_registro,
      status_presenca
    );
    res.status(201).json(novaFrequencia);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao registrar presença." });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { id_aluno, data_registro, status_presenca } = req.body;
  try {
    const frequenciaAtualizada = await frequenciasModel.atualizar(
      id,
      id_aluno,
      data_registro,
      status_presenca
    );
    if (!frequenciaAtualizada)
      return res.status(404).json({ message: "Registro não encontrado" });
    res.status(200).json(frequenciaAtualizada);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao atualizar registro." });
  }
};

module.exports = { obter, obterPorId, criar, atualizar };
