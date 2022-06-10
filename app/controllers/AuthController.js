const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

module.exports = {
  // Login
  signIn(req, res) {
    const { email, password } = req.body;

    // Search user
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(404).json({ msg: "User with this email not found" });
        } else {
          if (bcrypt.compareSync(password, user.password)) {
            // create token
            const token = jwt.sign({ user: user }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });

            res.json({
              user: user,
              token: token,
            });
          } else {
            // Unauthorized Access
            res.status(401).json({ msg: "Invalid password" });
          }
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // Registration
  signUp(req, res) {
    // Encrypt the password
    const password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );

    //Create a user
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
    })
      .then((user) => {
        // create token
        const token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        res.json({
          user: user,
          token: token,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
