const db = require("../../config/pgpConnection");

const obter = () => {
  return db.any("select * from avaliacoes");
};

const obterPorId = (id) => {
  return db.oneOrNone("select * from avaliacoes where id_avaliacao = $1", [id]);
};

const criar = async (data_avaliacao, id_aluno, criterios) => {
  let soma = 0;
  for (let i = 0; i < criterios.length; i++) {
    soma += criterios[i].pontuacao;
  }

  const media = parseInt(soma / criterios.length, 10);
  let nivel;

  if (media <= 50) {
    nivel = "Iniciante";
  } else if (media <= 140) {
    nivel = "Intermediário";
  } else {
    nivel = "Avançado";
  }

  const novaAvaliacao = await db.one(
    "insert into avaliacoes(data_avaliacao, nivel, id_aluno) values($1, $2, $3) returning *",
    [data_avaliacao, nivel, id_aluno]
  );

  for (let i = 0; i < criterios.length; i++) {
    await db.none(
      "insert into criterios_de_desempenho(nome_criterio, pontuacao, id_avaliacao) values($1, $2, $3)",
      [
        criterios[i].nome_criterio,
        criterios[i].pontuacao,
        novaAvaliacao.id_avaliacao
      ]
    );
  }

  return novaAvaliacao;
};

module.exports = { obter, obterPorId, criar };
