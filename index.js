// index.js — servidor Express mínimo
const express = require('express');
const alunosRouter = require('./backend/alunos');
const instrutoresRouter = require('./backend/instrutores');

const app = express();
const PORTA = process.env.PORT || 3000;

// Middleware para fazer o parse do corpo JSON das requisições
app.use(express.json());

app.use('/api/alunos', alunosRouter);
app.use('/api/instrutores', instrutoresRouter);

// Rota de teste
app.get('/usuarios', (req, res) => {
  
    res.status(200).json(users);
    
});

const users = [];

app.post('/usuarios', (req, res) => {

    users.push(req.body);
    res.status(201).json(req.body);
})

app.put('/usuarios/:id', (req, res) => {


    users.push(req.body);
    res.status(200).json(req.body);

})

// Inicia o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

// Dicas de execução:
// npm run dev  # com npm
// yarn dev     # com yarn
// Teste:
// curl http://localhost:3000/
