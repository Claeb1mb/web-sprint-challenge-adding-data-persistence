// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault : true,
    connection: {
      filename: './data/db_file.db3'
    },
    // makes it so that when we create our tables they will be made in the folders directed same goes for the seeds below
    migrations: {
      directory: './data/migrations'
    },
    seeds : {
      directory: './data/seeds'
    },
    // Needed to enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },

};
