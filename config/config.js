
const config = {
    "development": {
      "username": "postgres",
      "password": "fiqih",
      "database": "my_gram",
      "host": "127.0.0.1",
      "dialect":  "postgres"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
  
module.exports = config