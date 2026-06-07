const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usuariosModel = require("../models/usuariosModel");

const cadastrar = async (req, res) => {
  const { login, senha, role } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 12);
    const novoUsuario = await usuariosModel.criar(login, senhaHash, role);

    res.status(201).json(novoUsuario);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao cadastrar usuário." });
  }
};

const login = async (req, res) => {
  const { login, senha } = req.body;

  try {
    const usuario = await usuariosModel.obterLogin(login);

    const hashFicticio =
      "$2b$12$invalidhashinvalidhashinvalidhashinvalidhashinvali";
    const senhaValida = await bcrypt.compare(
      senha,
      usuario?.senha ?? hashFicticio,
    );
    if (!usuario || !senhaValida) {
      return res.status(401).json({ erro: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { id: usuario.id, role: usuario.role },
      process.env.JWT_SECRET,
    );

    res.status(200).json({ token });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao fazer login." });
  }
};

module.exports = { cadastrar, login };
