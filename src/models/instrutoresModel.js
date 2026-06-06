const db = require("../../config/pgpConnection");

const obterInstrutores = () => {
    return db.any('select * from instrutores');
};

const criar = (nome, status_instrutor, telefone, cep, logradouro, numero, bairro) => {
    return db.one(
        'insert into instrutores(nome, status_instrutor, telefone, cep, logradouro, numero, bairro) values($1, $2, $3, $4, $5, $6, $7) returning *', 
        [nome, status_instrutor, telefone, cep, logradouro, numero, bairro]
    );
};

module.exports = { obterInstrutores, criar };