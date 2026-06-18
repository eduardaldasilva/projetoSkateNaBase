const db = require("../../config/pgpConnection");

const obter = () => {
  return db.any("select * from frequencias");
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from frequencias where id_presenca = $1", [id]);
};

const criar = (id_aluno, data_registro, status_presenca) => {
  return db.one(
    "insert into frequencias(id_aluno, data_registro, status_presenca) values($1, $2, $3) returning *",
    [id_aluno, data_registro, status_presenca]
  );
};

const atualizar = (id, id_aluno, data_registro, status_presenca) => {
  return db.oneOrNone(
    "update frequencias set id_aluno = $1, data_registro = $2, status_presenca = $3 where id_presenca = $4 returning *",
    [id_aluno, data_registro, status_presenca, id]
  );
};

module.exports = { obter, obterPorId, criar, atualizar };
