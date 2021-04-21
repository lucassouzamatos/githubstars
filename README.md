# githubstars

## Overview
This project is a challenge for selective process to Brainn company. The specification was pre defined for the test, and can be checked [here](https://github.com/brainnco-exs/readme-developer).

## Installation
You should start directly by yarn or by docker.

### You choose yarn
First, it's necessary that the [PostgreSQL](https://www.postgresql.org/) is running in your machine. 

The enviroment file must be wrote with your local database:
```
# packages/api/ormconfig.json

{
  "username": "postgres",
  "password": "postgres",
  "type": "postgres",
  "name": "default",
  "host": "localhost",
  "port": 5432,
  "database": "githubstars",
  "entities": ["./src/entities/**/*.ts"],
  "migrations": ["./src/infra/typeorm/migrations/*.ts"],
  "migrationsRun": true,
  "cli": {
    "migrationsDir": "./src/infra/typeorm/migrations"
  }
}
```

The env's field "database" specifies the database name, and it must be created in your PostgreSQL. Also the database with suffix "_tests" must be created too, if you wish to run the unit tests

On the root folder, runs:
```
yarn
yarn workspace api dev:server
yarn workspace web start
```

## Tests
If you wish to run the tests, just run:
```
yarn workspace api test
yarn workspace web test
```

