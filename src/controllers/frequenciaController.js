const frequenciaModel = require("../models/frequenciaModel");

const listarFrequencias = async (req, res) => {
  try {
    const frequencias = await frequenciaModel.obterFrequencias();
    res.status(200).json(frequencias);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar registros de frequência." });
  }
};

const obterFrequencia = async (req, res) => {
  const { id } = req.params;
  try {
    const frequencia = await frequenciaModel.obterPorId(id);
    if (!frequencia)
      return res.status(404).json({ message: "Registro não encontrado" });
    res.status(200).json(frequencia);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar registro de frequência." });
  }
};

const criarFrequencia = async (req, res) => {
  const { id_aluno, data_registro, status_presenca } = req.body;
  try {
    const novaFrequencia = await frequenciaModel.criar(
      id_aluno,
      data_registro,
      status_presenca,
    );
    res.status(201).json(novaFrequencia);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao registrar presença." });
  }
};

const atualizarFrequencia = async (req, res) => {
  const { id } = req.params;
  const { id_aluno, data_registro, status_presenca } = req.body;
  try {
    const frequenciaAtualizada = await frequenciaModel.atualizar(
      id,
      id_aluno,
      data_registro,
      status_presenca,
    );
    if (!frequenciaAtualizada)
      return res.status(404).json({ message: "Registro não encontrado" });
    res.status(200).json(frequenciaAtualizada);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao atualizar registro." });
  }
};

module.exports = { listarFrequencias, obterFrequencia, criarFrequencia, atualizarFrequencia };
