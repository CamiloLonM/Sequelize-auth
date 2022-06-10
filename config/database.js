require("dotenv").config();

module.exports = {
  // Config de DB
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || "Jwt_Sequelize",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "mysql",

  // Config Seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  // Config  Migrations
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
};
