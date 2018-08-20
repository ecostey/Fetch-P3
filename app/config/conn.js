const pgp = require('pg-promise')();

const opts = {
  database: 'fetch_db',
};

const db = pgp(opts);

module.exports = {
  pgp,
  db,
};
