export const apiFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };
  const url = `http://localhost:3000${endpoint}`;

  const resposta = await fetch(url, {
    ...options,
    headers,
  });

  return resposta;
};
