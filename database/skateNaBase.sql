DROP DATABASE IF EXISTS "skateNaBase";
CREATE DATABASE "skateNaBase";
\c "skateNaBase";

CREATE TYPE status_presenca AS ENUM ('Presente', 'Ausente');
CREATE TYPE status AS ENUM ('Ativo', 'Inativo');

create table usuarios (
    id serial,
    login varchar(150) unique not null,
    senha varchar(255) not null,
    role varchar(50) not null
);

CREATE TABLE alunos (
    id_aluno SERIAL,
    id_turma INT,
    nome VARCHAR(150),
    nome_responsavel VARCHAR(150),
    status_aluno status,
    data_nascimento DATE,
    telefone VARCHAR(11),
    cep VARCHAR(9),
    logradouro VARCHAR(200),
    numero VARCHAR(5),
    bairro VARCHAR(100)
);

CREATE TABLE instrutores (
    id_instrutor SERIAL,
    nome VARCHAR(150),
    status_instrutor status,
    telefone VARCHAR(11),
    cep VARCHAR(9),
    logradouro VARCHAR(200),
    numero VARCHAR(5),
    bairro VARCHAR(100)
);

CREATE TABLE frequencia (
    id_presenca SERIAL,
    id_aluno INT,
    data_presenca TIMESTAMP,
    presenca status_presenca
);

CREATE TABLE turma (
    id_turma SERIAL,
    data_aula VARCHAR(15),
    horario TIME,
    qtd_vagas INT,
    id_instrutor INT
);

ALTER TABLE alunos ADD CONSTRAINT pk_alunos PRIMARY KEY (id_aluno);
ALTER TABLE instrutores ADD CONSTRAINT pk_instrutores PRIMARY KEY (id_instrutor);
ALTER TABLE frequencia ADD CONSTRAINT pk_presencas PRIMARY KEY (id_presenca);
ALTER TABLE turma ADD CONSTRAINT pk_turma PRIMARY KEY (id_turma);
ALTER TABLE usuarios ADD CONSTRAINT pk_usuarios PRIMARY KEY (id);

ALTER TABLE frequencia ADD CONSTRAINT fk_presencas_aluno FOREIGN KEY (id_aluno) REFERENCES alunos (id_aluno) ON DELETE CASCADE;
ALTER TABLE turma ADD CONSTRAINT fk_turma_instrutor FOREIGN KEY (id_instrutor) REFERENCES instrutores (id_instrutor) ON DELETE CASCADE;
ALTER TABLE alunos ADD CONSTRAINT fk_turma_aluno FOREIGN KEY (id_turma) REFERENCES turma (id_turma) ON DELETE CASCADE;

