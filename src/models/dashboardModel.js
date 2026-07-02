const db = require("../../config/pgpConnection");

const obterDash = () => {
  return db.any(
    "select id_turma, count(id_aluno)::int as qtd_alunos from alunos group by id_turma",
  );
};

module.exports = { obterDash };
