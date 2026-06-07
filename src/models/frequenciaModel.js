const db = require("../../config/pgpConnection");

const obterFrequencias = () => {
  return db.any("select * from frequencias");
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from frequencias where id = $1", [id]);
};

const criar = (id_aluno, id_turma, status_presenca, data_registro) => {
  return db.one(
    "insert into frequencias(id_aluno, id_turma, status_presenca, data_registro) values($1, $2, $3, $4) returning *",
    [id_aluno, id_turma, status_presenca, data_registro],
  );
};

const atualizar = (id, id_aluno, id_turma, status_presenca, data_registro) => {
  return db.oneOrNone(
    "update frequencias set id_aluno = $1, id_turma = $2, status_presenca = $3, data_registro = $4 where id = $5 returning *",
    [id_aluno, id_turma, status_presenca, data_registro, id],
  );
};

const excluir = (id) => {
  return db.oneOrNone("delete from frequencias where id = $1 returning *", [
    id,
  ]);
};

module.exports = { obterFrequencias, obterPorId, criar, atualizar, excluir };
