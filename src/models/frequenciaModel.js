const db = require("../../config/pgpConnection");

const obterFrequencias = () => {
  return db.any("select * from frequencia");
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from frequencia where id_presenca = $1", [id]);
};

const criar = (id_aluno, data_registro, status_presenca) => {
  return db.one(
    "insert into frequencia(id_aluno, data_registro, status_presenca) values($1, $2, $3) returning *",
    [id_aluno, data_registro, status_presenca],
  );
};

const atualizar = (id, id_aluno, data_registro, status_presenca) => {
  return db.oneOrNone(
    "update frequencia set id_aluno = $1, data_registro = $2, status_presenca = $3 where id_presenca = $4 returning *",
    [id_aluno, data_registro, status_presenca, id],
  );
};

module.exports = { obterFrequencias, obterPorId, criar, atualizar };
