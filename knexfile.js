// Update with your config settings.
require('dotenv').load();

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/vegaspro'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
