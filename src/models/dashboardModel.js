const db = require("../../config/pgpConnection");

const obterDash = () => {
  return db.oneOrNone(
    "select id_turma, count(id_aluno) as qtd_alunos from alunos group by id_turma"
  )
};

module.exports = { obterDash };
