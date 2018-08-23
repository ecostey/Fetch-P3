// require pg-promise
const pgp = require('pg-promise')();

// set database to databaseURL or fetch_db
// const opts = process.env.DATABASE_URL || {
//   database: 'fetch_db',
// };
const opts = {
  database: 'fetch_db',
};


const db = pgp(opts);

// export db
module.exports = {
  pgp,
  db,
};
