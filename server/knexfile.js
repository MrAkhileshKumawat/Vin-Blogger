// Update with your config settings.
const Dotenv = require("dotenv");
Dotenv.config({ path: `${__dirname}/.env` });

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      directory: __dirname+"/lib/migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname+"/lib/migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname+"/lib/migrations"
    }
  }

};