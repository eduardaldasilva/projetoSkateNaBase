const db = require("../../config/pgpConnection");

const obterLogin = (login) => {
  return db.oneOrNone("select * from usuarios where login = $1", [login]);
};

const criar = (login, senha, role) => {
  return db.one(
    "insert into usuarios(login, senha, role) values($1, $2, $3) returning id, login, role",
    [login, senha, role]
  );
};

module.exports = { obterLogin, criar };
