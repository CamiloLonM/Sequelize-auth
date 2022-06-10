"use strict";

const { User } = require("../../models/index");
const bcrypt = require("bcrypt");
const authConfig = require("../../../config/auth");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      User.create(
        {
          name: "jaja",
          email: "jaja@gmail.com",
          password: bcrypt.hashSync("123456", +authConfig.rounds),
          posts: [
            {
              title: "Title 1",
              body: "Body 1",
            },
            {
              title: "Title 2",
              body: "Body 2",
            },
          ],
        },
        {
          include: "posts",
        }
      ),

      User.create(
        {
          name: "pepe",
          email: "pepe@gmail.com",
          password: bcrypt.hashSync("123456", +authConfig.rounds),
          posts: [
            {
              title: "Title 3",
              body: "Body 3",
            },
            {
              title: "Title 4",
              body: "Body 4",
            },
          ],
        },
        {
          include: "posts",
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete("posts", null, {}),
      queryInterface.bulkDelete("users", null, {}),
    ]);
  },
};
