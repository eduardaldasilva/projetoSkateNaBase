const alunos = [];

const getAll = () => {
  return alunos;
};

const create = (userData) => {
  alunos.push(userData);
  return userData;
};

const update = (id, userData) => {
  // Procuramos o usuário pelo ID
  const index = alunos.findIndex((u) => String(u.id) === String(id));
  if (index !== -1) {
    alunos[index] = { ...alunos[index], ...userData };
    return alunos[index];
  }
  return null;
};

module.exports = {
  getAll,
  create,
  update,
};
