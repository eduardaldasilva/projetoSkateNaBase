const turmasModel = require("../models/turmasModel");

const listarTurmas = async (req, res) => {
  try {
    const turmas = await turmasModel.obterTurmas();
    res.status(200).json(turmas);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao buscar turmas." });
  }
};

const obterTurma = async (req, res) => {
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

const criarTurma = async (req, res) => {
  const { data_aula, horario, qtd_vagas, id_instrutor } = req.body;

  try {
    const novaTurma = await turmasModel.criar(
      data_aula,
      horario,
      qtd_vagas,
      id_instrutor,
    );
    res.status(201).json(novaTurma);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao criar turma." });
  }
};

const atualizarTurma = async (req, res) => {
  const { id } = req.params;
  const { data_aula, horario, qtd_vagas, id_instrutor } = req.body;

  try {
    const turmaAtualizada = await turmasModel.atualizar(
      id,
      data_aula,
      horario,
      qtd_vagas,
      id_instrutor,
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

const excluirTurma = async (req, res) => {
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

module.exports = { listarTurmas, obterTurma, criarTurma, atualizarTurma, excluirTurma};
