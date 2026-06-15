DROP DATABASE IF EXISTS "skateNaBase";
CREATE DATABASE "skateNaBase";
\c "skateNaBase";

CREATE TYPE status_frequencia AS ENUM ('Presente', 'Ausente');
CREATE TYPE status AS ENUM ('Ativo', 'Inativo');

CREATE TABLE usuarios (
    id SERIAL,
    login VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(10) NOT NULL,
    role VARCHAR(14) NOT NULL
);

CREATE TABLE alunos (
    id_aluno SERIAL,
    id_turma INT,
    nome VARCHAR(150),
    nome_responsavel VARCHAR(150),
    status_aluno status,
    data_nascimento DATE,
    telefone VARCHAR(18),
    cep VARCHAR(10),
    logradouro VARCHAR(200),
    numero VARCHAR(5),
    bairro VARCHAR(150)
);

CREATE TABLE instrutores (
    id_instrutor SERIAL,
    nome VARCHAR(150),
    status_instrutor status,
    telefone VARCHAR(18),
    cep VARCHAR(10),
    logradouro VARCHAR(200),
    numero VARCHAR(5),
    bairro VARCHAR(150)
);

CREATE TABLE frequencias (
    id_presenca SERIAL,aluno
    id_aluno INT,
    data_registro TIMESTAMP,
    status_presenca status_frequencia
);

CREATE TABLE turmas (
    id_turma SERIAL,
    data_aula VARCHAR(15),
    horario TIME,
    qtd_vagas INT,
    id_instrutor INT
    nivel VARCHAR(14);
);

CREATE TABLE noticias (
    id_noticia SERIAL,
    titulo VARCHAR(250),
    descricao TEXT,
    data_criacao TIMESTAMP,
    status_noticia status,
    id_turma INT;
);

CREATE TABLE avaliacoes (
    id_avaliacao SERIAL,
    data_avaliacao DATE,
    nivel VARCHAR(14),
    id_aluno INT;
);

CREATE TABLE criterios_de_desempenho (
    id_criterio SERIAL,
    nome_criterio VARCHAR(100),
    pontuacao INT,
    id_avaliacao INT;
);


ALTER TABLE alunos ADD CONSTRAINT pk_alunos PRIMARY KEY (id_aluno);
ALTER TABLE instrutores ADD CONSTRAINT pk_instrutores PRIMARY KEY (id_instrutor);
ALTER TABLE frequencias ADD CONSTRAINT pk_presencas PRIMARY KEY (id_presenca);
ALTER TABLE turmas ADD CONSTRAINT pk_turmas PRIMARY KEY (id_turma);
ALTER TABLE usuarios ADD CONSTRAINT pk_usuarios PRIMARY KEY (id);
ALTER TABLE noticias ADD CONSTRAINT pk_noticias PRIMARY KEY (id_noticia);
ALTER TABLE avaliacoes ADD CONSTRAINT pk_avaliacoes PRIMARY KEY (id_avaliacao);
ALTER TABLE criterios_de_desempenho ADD CONSTRAINT pk_criterio PRIMARY KEY (id_criterio);

ALTER TABLE frequencias ADD CONSTRAINT fk_presencas_aluno FOREIGN KEY (id_aluno) REFERENCES alunos (id_aluno) ON DELETE CASCADE;
ALTER TABLE turmas ADD CONSTRAINT fk_turma_instrutor FOREIGN KEY (id_instrutor) REFERENCES instrutores (id_instrutor) ON DELETE CASCADE;
ALTER TABLE alunos ADD CONSTRAINT fk_turma_aluno FOREIGN KEY (id_turma) REFERENCES turmas (id_turma) ON DELETE CASCADE;
ALTER TABLE noticias ADD CONSTRAINT fk_noticia_turma FOREIGN KEY (id_turma) REFERENCES turmas (id_turma) ON DELETE CASCADE;
ALTER TABLE avaliacoes ADD CONSTRAINT fk_avalicao_aluno FOREIGN KEY (id_aluno) REFERENCES alunos (id_aluno) ON DELETE CASCADE;
ALTER TABLE criterios_de_desempenho ADD CONSTRAINT fk_avalicao_desempenho FOREIGN KEY (id_avaliacao) REFERENCES avaliacoes (id_avaliacao) ON DELETE CASCADE;

