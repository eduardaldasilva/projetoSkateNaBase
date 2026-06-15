const db = require("../../config/pgpConnection");

const obterTurmas = () => {
  return db.any("select * from turmas");
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from turmas where id_turma = $1", [id]);
};

const criar = (data_aula, horario, qtd_vagas, id_instrutor) => {
  return db.one(
    "insert into turmas(data_aula, horario, qtd_vagas, id_instrutor) values($1, $2, $3, $4) returning *",
    [data_aula, horario, qtd_vagas, id_instrutor],
  );
};

const atualizar = (id, data_aula, horario, qtd_vagas, id_instrutor) => {
  return db.oneOrNone(
    "update turmas set data_aula = $1, horario = $2, qtd_vagas = $3, id_instrutor = $4 where id_turma = $5 returning *",
    [data_aula, horario, qtd_vagas, id_instrutor, id],
  );
};

const excluir = (id) => {
  return db.oneOrNone("delete from turmas where id_turma = $1 returning *", [id]);
};

module.exports = { obterTurmas, obterPorId, criar, atualizar, excluir };
