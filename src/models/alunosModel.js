const db = require("../../config/pgpConnection");

const obterAlunos = () => {
    return db.any('select * from alunos');
};

const criar = (nome, nome_responsavel, status_aluno, data_nascimento, telefone, cep, logradouro, numero, bairro) => {
    return db.one(
        'insert into alunos(nome, nome_responsavel, status_aluno, data_nascimento, telefone, cep, logradouro, numero, bairro) values($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *', 
        [nome, nome_responsavel, status_aluno, data_nascimento, telefone, cep, logradouro, numero, bairro]
    );
};

module.exports = { obterAlunos, criar };