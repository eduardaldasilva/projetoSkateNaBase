// index.js — servidor Express mínimo
const express = require("express");
const alunosRouter = require("./src/routes/alunosRoutes");
const instrutoresRouter = require("./src/routes/instrutoresRoutes");

const app = express();
const PORTA = process.env.PORT || 3000;

// Middleware para fazer o parse do corpo JSON das requisições
app.use(express.json());

app.use("/alunos", alunosRouter);
app.use("/instrutores", instrutoresRouter);

// Inicia o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

// Dicas de execução:
// npm run dev  # com npm
// yarn dev     # com yarn
// Teste:
// curl http://localhost:3000/
