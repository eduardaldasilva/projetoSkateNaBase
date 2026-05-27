const instrutores = [];

const getAll = () => {
  return instrutores;
};

const create = (userData) => {
  instrutores.push(userData);
  return userData;
};

const update = (id, userData) => {
  // Procuramos o usuário pelo ID
  const index = instrutores.findIndex((u) => String(u.id) === String(id));
  if (index !== -1) {
    instrutores[index] = { ...instrutores[index], ...userData };
    return instrutores[index];
  }
  return null;
};

module.exports = {
  getAll,
  create,
  update,
};
