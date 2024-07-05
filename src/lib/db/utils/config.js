const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',           // Your PostgreSQL username
  host: 'localhost',       // Your PostgreSQL server host
  database: 'dbt_db',   // The database you just created
  password: 'root',        // Your PostgreSQL password
  port: 5432,              // Your PostgreSQL server port
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log('Connection successful:', res.rows);
  }
  pool.end();
});
