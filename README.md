# Githubstars

## Overview
This project is a challenge for selective process to Brainn company. The specification was pre defined for the test, and can be checked [here](https://github.com/brainnco-exs/readme-developer).

## Documentation sections
[Front-end](#front-end)
[Back-end](#back-end)

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

## Functionality demonstrations
### Home
The home page has a form with user input for their username in Github. After the submit form, the page should syncronize user and redirect to list of repositories starred. An example must be viewed [here](assets/sync.gif).

### List
The list page has a table with a limited result from starred repositories from github. On the page it's possible search repositories for your tags and with "edit" action is possible links tags in repositories. An example must be viewed [here](assets/search.gif).

### Link tags by modal
With the modal of tags is possible to define the tags for the link, it must be inserted separated by a comma, and the platform should realize the all work for separate it. An example must be viewed [here](assets/add-tag.gif).

### Header
By header, it's possible back to home, and then the user is unsynchronized and after this, is possible to synchronize again with any user. An example must be viewed [here](assets/unsync.gif).

# Back-end
## Overview
The back-end was designed by the [model entities](assets/entities.png). 
The structure code the most part was architected following [Clean Arquitecture by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

If you wanna play with API in your machine, the postman collection is available [here](assets/collection.json).

## Requests structure
### Sync
For the access API and get repositories and link tags in user, it's necessary sync with your Github username, and then a token will be provided for use in the next requests.

```no-highlight
POST {{ ApiUrl }}/api/user/sync
```
#### Request body
```json
{
    "username": "github-username"
}
```
    
#### Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTkwNDQ0OTIsInN1YiI6IjdkYmI0ZmIzLTBhMDAtNDgzZi04MmNlLTNlNTVhWY0ZDVmZiJ9.UUuCfMVTBUwQyNy4rR4GxHf84it5tnKbnJ7nBIclSEI"
}
```

### Favorites
Get repositories starred by user synchronized. The authorization token must be defined in headers.

```no-highlight
GET {{ ApiUrl }}/api/favorites
```

#### Response
```json
{
    "data": [
        {
            "id": "105b8967-7c1a-4e73-8cf2-4b7f3a7e20bc",
            "created_at": "2021-04-21T01:57:47.276Z",
            "updated_at": "2021-04-21T01:57:47.276Z",
            "tags": [],
            "repository": {
                "id": "30565db7-52e9-4423-be0b-7bb9d5fe3b61",
                "github_id": "172471552",
                "name": "aliyr/Nodejs-Developer-Roadmap",
                "description": "A Developer Roadmap to becoming a Node.js developer in 2019",
                "language": null,
                "url": "https://github.com/aliyr/Nodejs-Developer-Roadmap",
                "created_at": "2021-04-19T03:41:48.717Z",
                "updated_at": "2021-04-19T03:41:48.717Z"
            }
        }
    ]
}
```

### Attach tag
Attach tags in repositories starred by user synchronized, the tags specified in the body should be sent with comma separation. If you wanna remove a tag, just no send with the rest of tags, only specified tags are maintained the rest are detached. The authorization token must be defined in headers.

```no-highlight
POST {{ ApiUrl }}/api/tags/attach
```

### Request body
```json
{
    "favorite_id": "105b8967-7c1a-4e73-8cf2-4b7f3a7e20bc",
    "tags": "tag-1"
}
```

### Response
```json
{
    "favorite": {
        "id": "105b8967-7c1a-4e73-8cf2-4b7f3a7e20bc",
        "created_at": "2021-04-21T01:57:47.276Z",
        "updated_at": "2021-04-21T01:57:47.276Z",
        "tags": [
            {
                "id": "e69bebcc-f6e1-46ad-8203-039b8b86fc39",
                "name": "tag-1",
                "created_at": "2021-04-21T22:45:27.140Z",
                "updated_at": "2021-04-21T22:45:27.140Z"
            }
        ],
        "repository": {
            "id": "30565db7-52e9-4423-be0b-7bb9d5fe3b61",
            "github_id": "172471552",
            "name": "aliyr/Nodejs-Developer-Roadmap",
            "description": "A Developer Roadmap to becoming a Node.js developer in 2019",
            "language": null,
            "url": "https://github.com/aliyr/Nodejs-Developer-Roadmap",
            "created_at": "2021-04-19T03:41:48.717Z",
            "updated_at": "2021-04-19T03:41:48.717Z"
        }
    }
}
```