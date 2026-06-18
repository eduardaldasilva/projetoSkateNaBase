const noticiasModel = require("../models/noticiasModel");

const obterNoticias = async (req, res) => {
  try {
    const noticias = await noticiasModel.obterNoticias();
    return res.status(200).json(noticias);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

const obterPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const noticia = await noticiasModel.obterPorId(id);

    if (!noticia) {
      return res.status(404).json({ mensagem: "Notícia não encontrada." });
    }

    return res.status(200).json(noticia);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

const criar = async (req, res) => {
  try {
    const { titulo, descricao, id_turma } = req.body;

    const novaNoticia = await noticiasModel.criar(titulo, descricao, id_turma);

    return res.status(201).json(novaNoticia);
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
};

module.exports = { obterNoticias, obterPorId, criar };