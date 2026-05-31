const pgp = require("pg-promise")();
const db = pgp({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || "skateNaBase",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  max: 10, // tamanho máximo do pool de conexões
});
module.exports = db;
