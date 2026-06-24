const turmasModel = require("../models/turmasModel");

const obter = async (req, res) => {
  try {
    const turmas = await turmasModel.obter();
    res.status(200).json(turmas);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar turmas." });
  }
};

const obterPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const turma = await turmasModel.obterPorId(id);

    if (!turma) {
      return res.status(404).json({ message: "Turma não encontrada" });
    }

    res.status(200).json(turma);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar turma." });
  }
};

const criar = async (req, res) => {
  const { data_aula, horario, qtd_vagas, id_instrutor } = req.body;

  try {
    const novaTurma = await turmasModel.criar(
      data_aula,
      horario,
      qtd_vagas,
      id_instrutor
    );
    res.status(201).json(novaTurma);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao criar turma." });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { data_aula, horario, qtd_vagas, id_instrutor } = req.body;

  try {
    const turmaAtualizada = await turmasModel.atualizar(
      id,
      data_aula,
      horario,
      qtd_vagas,
      id_instrutor
    );

    if (!turmaAtualizada) {
      return res.status(404).json({ message: "Turma não encontrada" });
    }

    res.status(200).json(turmaAtualizada);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao atualizar turma." });
  }
};

const excluir = async (req, res) => {
  const { id } = req.params;

  try {
    const turmaExcluida = await turmasModel.excluir(id);

    if (!turmaExcluida) {
      return res.status(404).json({ message: "Turma não encontrada" });
    }

    res.status(200).json({ message: "Turma excluída com sucesso." });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao excluir turma." });
  }
};

module.exports = { obter, obterPorId, criar, atualizar, excluir};
