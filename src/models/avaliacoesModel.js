const db = require("../../config/pgpConnection");

const obter = () => {
  return db.any("select * from avaliacoes");
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from avaliacoes where id_avaliacao = $1", [id]);
};

const criar = async (data_avaliacao, id_aluno, pontuacoes) => {
  const notas = Object.values(pontuacoes);
  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  let nivel;

  if (soma <= 90) {
    nivel = "Iniciante";
  } else if (soma <= 120) {
    nivel = "Intermediário";
  } else {
    nivel = "Avançado";
  }

  const novaAvaliacao = await db.one(
    "insert into avaliacoes(data_avaliacao, nivel, id_aluno) values($1, $2, $3) returning *",
    [data_avaliacao, nivel, id_aluno],
  );

  const listaCriterios = Object.entries(pontuacoes);

  for (const [nome_criterio, pontuacao] of listaCriterios) {
    await db.none(
      "insert into criterios_de_desempenho(nome_criterio, pontuacao, id_avaliacao) values($1, $2, $3)",
      [nome_criterio, pontuacao, novaAvaliacao.id_avaliacao],
    );
  }

  return novaAvaliacao;
};

module.exports = { obter, obterPorId, criar };
