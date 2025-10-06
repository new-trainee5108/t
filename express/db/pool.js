
const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://kumar97:@localhost:5432/top_users'
});
