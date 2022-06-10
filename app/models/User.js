"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "The name can only contain letters",
          },
          len: {
            args: [2, 255],
            msg: "The name must be a minimum of two characters",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "The email must be a valid email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "The password must have at least 6 characters",
          },
        },
      },
    },
    {
      tableName: "users",
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Post, { as: "posts", foreignKey: "userId" });
    User.belongsToMany(models.Role, {
      as: "roles",
      through: "user_role",
      foreignKey: "user_id",
    });
  };

  // Comprueba que el usuario es administrador
  User.isAdmin = function (roles) {
    let tmpArray = [];
    roles.forEach((role) => tmpArray.push(role.role));

    return tmpArray.includes("admin");
  };

  return User;
};
