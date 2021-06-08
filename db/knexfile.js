// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      // TODO change to your db name
      database: "knexjs_tutorial",

      // change to your db user
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
}
