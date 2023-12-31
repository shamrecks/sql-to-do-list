const pg = require('pg');
let pool;
let databaseName = 'weekend-to-do-app';

if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
          rejectUnauthorized: false
      }
  });
} else {
  pool = new pg.Pool({
      host: 'LocalHost',
      port: 5432,
      database: databaseName,
  });
}

module.exports = pool;