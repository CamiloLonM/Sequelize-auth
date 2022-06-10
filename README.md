# Authentication with JWT and Sequelize

Api

## Introduction - The Project's Aim...

JWT and ORM Sequelize based authorization of NodeJs and JavaScript with roles (admin, user, etc.)

## Technologies

- Node JS
- Express JS
- Mysql
- sequelize

## How to run this App ?

To run the API you have to change some environment variables

PORT: this is the port where API runs.

MySql_URL: url of the Mysql database. (for example if you run this in your local machine you can use this url Mysql://localhost/<name_of_database>)

my_URL: url of the mySql database. (for example if you run this in your local machine you can use this url ://localhost/<name_of_database>)

# Install

First edit the **\_.env ** file for your database. Later:

```
# Instalar dependencias

npm install

# create tables

npx sequelize-cli db:migrate

# create seeds

npx sequelize-cli db:seed:all
# To run the API use the command.

npm run dev
```

# WEB

## Introduction - The Project's Aim

## Technologies

Nodejs

## How to run this App ?

To run the WEB you have to change some environment variables

APP_URL= url of the API of this project (for example: http://localhost:8000).
Then you have to install dependencies using the command.

- npm install

To run the API use the command.

- npm run dev
