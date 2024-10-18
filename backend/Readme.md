# Bot

Bot chat is a RESTful API that allows user to auto generate ideas, save idea, and reset ideas. The app is built with NodeJS, TypeScript, MySQL, and TypeORM.

## Features

- CRUD operations for ideas `but updating ideas is not allowed`
- Pagination support
- Error handling



## Setup
1. Copy the `.env.example` file to `.env` and update the necessary variables: `cp .env.example .env`

## Tools and Technologies Used
- NodeJS
- TypeScript
- MySQL
- TypeORM

## Running via Docker
Then run the following command:
`docker compose up --build`

his will build and run the Docker container for the app and the MySQL database. You can then access the app at `http://localhost:3001/api`.

Make sure that you have Docker installed on your machine before running this command. You can download Docker [here](https://www.docker.com/get-started).


## Available scripts
- `docker exec -it backend-app-1 sh` run the command before using any of the below scripts

- `typeorm`: Runs the TypeORM CLI with the `Database.ts` file.
- `migration:show`: Shows all the executed migrations.
- `migration:create`: Creates a new migration. You need to provide a name for the migration. Example: `npm run migration:create create_ideas_table`.
- `migration:run`: Runs all pending migrations.
- `migration:revert`: Reverts the last executed migration.

## Creating a new migration
To create a new migration, run the following command:

`npm run migration:create <migration-name>` for example: `npm run migration:create create_ideas_table`

> This will create a new migration file in the `src/migrations` directory.

You can then edit the migration file and define the necessary schema changes.

## Reverting a migration

To revert the last executed migration, run the following command: `npm run migration:revert`

## API endpoints

- `POST /chat`: Get idea from the bot
- `GET /ideas?page=${page}`: Query saved ideas with pagination
- `POST /ideas`: Save an idea
- `POST /ideas/reset`: Reset all saved ideas