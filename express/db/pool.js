const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "kumar97",
  database: "top_users",
  password: "",
  port: 5432,
});
