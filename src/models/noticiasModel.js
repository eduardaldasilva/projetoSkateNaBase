const db = require("../../config/pgpConnection");

const obterNoticias = () => {
  return db.any("select * from noticias");
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from noticias where id_noticia = $1", [id]);
};

const criar = async (titulo, descricao, id_turma) => {
  await db.none(
    "update noticias set status_noticia = 'Inativo' where id_turma = $1",
    [id_turma]
  );

  const novaNoticia = await db.one(
    "insert into noticias(titulo, descricao, data_criacao, status_noticia, id_turma) values($1, $2, NOW(), 'Ativo', $3) returning *",
    [titulo, descricao, id_turma]
  );

  return novaNoticia;
};

module.exports = { obterNoticias, obterPorId, criar };