const db = require("../../config/pgpConnection");

const obterInstrutores = () => {
  return db.any("select * from instrutores");
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from instrutores where id_instrutor = $1", [id]);
};

const criar = (
  nome,
  status_instrutor,
  telefone,
  cep,
  logradouro,
  numero,
  bairro,
) => {
  return db.one(
    "insert into instrutores(nome, status_instrutor, telefone, cep, logradouro, numero, bairro) values($1, $2, $3, $4, $5, $6, $7) returning *",
    [nome, status_instrutor, telefone, cep, logradouro, numero, bairro],
  );
};

const atualizar = (
  id,
  nome,
  status_instrutor,
  telefone,
  cep,
  logradouro,
  numero,
  bairro,
) => {
  return db.oneOrNone(
    "update instrutores set nome = $1, status_instrutor = $2, telefone = $3, cep = $4, logradouro = $5, numero = $6, bairro = $7 where id_instrutor = $8 returning *",
    [nome, status_instrutor, telefone, cep, logradouro, numero, bairro, id],
  );
};

const excluir = (id) => {
  return db.oneOrNone("delete from instrutores where id_instrutor = $1 returning *", [
    id,
  ]);
};

module.exports = { obterInstrutores, obterPorId, criar, atualizar, excluir };
