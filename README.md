# Githubstars

## Overview
This project is a challenge for selective process to Brainn company. The specification was pre defined for the test, and can be checked [here](https://github.com/brainnco-exs/readme-developer).

## Documentation sections
[Front-end](#front-end)

## Installation
You should start directly by yarn or by docker.

### You prefer docker
If you wanna use with docker enviroment, just run:

```
docker-composer up --build
```

The front-end will runs in localhost and server in localhost/api. If you wish to use the pgAdmin for database management, just access by localhost:16543.

The PostgreSQL database will running by port 54443 with databases githubstars and githubstars_tests.

### You prefer yarn
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

# Front-end

## Overview
The front-end project was inspired in wireframes from challenge, and can be checked [here](https://github.com/brainnco-exs/readme-developer/tree/master/wireframes). From wireframes, was designed new screens that can viewed by [Figma shared](https://www.figma.com/file/fIIDnuMBiZ9ejJWsHCGxoP/Githubstars?node-id=0%3A1).

## Installation
For installation, you could follow the instructions in the main readme.

## Funcionality demonstrations
### Home
The home page has a form with user input for their username in Github. After the submit form, the page should syncronize user and redirect to list of repositories starred.

### List
The list page has a table with a limited result from starred repositories from github. On the page it's possible search repositories for your tags and with "edit" action is possible links tags in repositories.

### Link tags by modal
With the modal of tags is possible to define the tags for the link, it must be inserted separated by a comma, and the platform should realize the all work for separate it.

### Header
By header, it's possible back to home, and then the user is unsynchronized and after this, is possible to synchronize again with any user.