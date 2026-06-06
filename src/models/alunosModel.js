const db = require("../../config/pgpConnection");

const obterAlunos = () => {
  return db.any("select * from alunos");
};

const criar = (
  nome,
  nome_responsavel,
  status_aluno,
  data_nascimento,
  telefone,
  cep,
  logradouro,
  numero,
  bairro,
) => {
  return db.one(
    "insert into alunos(nome, nome_responsavel, status_aluno, data_nascimento, telefone, cep, logradouro, numero, bairro) values($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *",
    [
      nome,
      nome_responsavel,
      status_aluno,
      data_nascimento,
      telefone,
      cep,
      logradouro,
      numero,
      bairro,
    ],
  );
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from alunos where id = $1", [id]);
};

const atualizar = (
  id,
  nome,
  nome_responsavel,
  status_aluno,
  data_nascimento,
  telefone,
  cep,
  logradouro,
  numero,
  bairro,
) => {
  return db.oneOrNone(
    "update alunos set nome = $1, nome_responsavel = $2, status_aluno = $3, data_nascimento = $4, telefone = $5, cep = $6, logradouro = $7, numero = $8, bairro = $9 where id = $10 returning *",
    [
      nome,
      nome_responsavel,
      status_aluno,
      data_nascimento,
      telefone,
      cep,
      logradouro,
      numero,
      bairro,
      id,
    ],
  );
};

const excluir = (id) => {
  return db.oneOrNone("delete from alunos where id = $1 returning *", [id]);
};

module.exports = { obterAlunos, obterPorId, criar, atualizar, excluir };
