const jwt = require("jsonwebtoken");

const autenticar = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token =
    authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
  if (!token) {
    return res.status(401).json({ erro: "Token de autenticação ausente" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload;
    next();
  } catch (erro) {
    console.error(erro);
    if (erro.name === "TokenExpiredError") {
      return res.status(401).json({ erro: "Token expirado", expirado: true });
    }
    return res.status(401).json({ erro: "Token inválido" });
  }
};

const autorizar = (...papeis) => {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ erro: "Não autenticado" });
    }

    if (!papeis.includes(req.usuario.role)) {
      return res.status(403).json({ erro: "Permissão insuficiente" });
    }

    next();
  };
};

module.exports = { autenticar, autorizar };
