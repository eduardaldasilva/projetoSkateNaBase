// index.js — servidor Express mínimo
const express = require('express');
const alunosRouter = require('./alunos');
const instrutoresRouter = require('./instrutores');

const app = express();
const PORTA = process.env.PORT || 3000;

// Middleware para fazer o parse do corpo JSON das requisições
app.use(express.json());

app.use('/api/alunos', alunosRouter);
app.use('/api/instrutores', instrutoresRouter);

// Rota de teste
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API funcionando!',
    versao: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Inicia o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

// Dicas de execução:
// npm run dev  # com npm
// yarn dev     # com yarn
// Teste:
// curl http://localhost:3000/
// Resposta esperada:
// { "mensagem": "API funcionando!", "versao": "1.0.0", "timestamp": "..." }
