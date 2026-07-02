const db = require("../../config/pgpConnection");

const obterLogin = (telefone) => {
  return db.oneOrNone("select * from usuarios where telefone = $1", [telefone]);
};

const criar = (telefone, senha, role) => {
  return db.one(
    "insert into usuarios(telefone, senha, role) values($1, $2, $3) returning id, telefone, role",
    [telefone, senha, role],
  );
};

module.exports = { obterLogin, criar };
