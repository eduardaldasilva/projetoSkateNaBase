// index.js — servidor Express mínimo
const express = require("express");
const alunosRouter = require("./src/routes/alunosRoutes");
const instrutoresRouter = require("./src/routes/instrutoresRoutes");
const dashboardRoutes = require("./src/routes/dashboardRoutes");
const frequenciaRoutes = require("./src/routes/frequenciaRoutes");
const turmasRoutes = require("./src/routes/turmasRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
const PORTA = process.env.PORT || 3000;

// Middleware para fazer o parse do corpo JSON das requisições
app.use(express.json());

app.use("/alunos", alunosRouter);
app.use("/instrutores", instrutoresRouter);
app.use("/turmas", turmasRoutes);
app.use("/frequencia", frequenciaRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/usuarios", authRoutes);

// Inicia o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
