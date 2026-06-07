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
  id_turma
) => {
  return db.one(
    "insert into alunos(nome, nome_responsavel, status_aluno, data_nascimento, telefone, cep, logradouro, numero, bairro, id_turma ) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *",
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
      id_turma
    ],
  );
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from alunos where id_aluno = $1", [id]);
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
  id_turma
) => {
  return db.oneOrNone(
    "update alunos set nome = $1, nome_responsavel = $2, status_aluno = $3, data_nascimento = $4, telefone = $5, cep = $6, logradouro = $7, numero = $8, bairro = $9, id_turma = $10 where id_aluno = $10 returning *",
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
      id_turma,
      id
    ],
  );
};

const excluir = (id) => {
  return db.oneOrNone("delete from alunos where id_aluno = $1 returning *", [id]);
};

module.exports = { obterAlunos, obterPorId, criar, atualizar, excluir };
