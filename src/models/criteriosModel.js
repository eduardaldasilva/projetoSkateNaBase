const db = require("../../config/pgpConnection");

const obterCriterios = () => {
  return db.any("select * from criterios_de_desempenho");
};

const obterAvaliacao = (id) => {
  return db.any("select * from criterios_de_desempenho where id_avaliacao = $1", [id]);
};

module.exports = { obterCriterios, obterAvaliacao };