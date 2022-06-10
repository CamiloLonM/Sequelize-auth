const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { User } = require("../models/index");

module.exports = (req, res, next) => {
  // Check that the token exists
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Unauthorized access " });
  } else {
    //
    const token = req.headers.authorization.split(" ")[1];

    // Check the validity of this token
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        res
          .status(500)
          .json({ msg: "There was a problem verifying the token", err });
      } else {
        User.findByPk(decoded.user.id, { include: "roles" }).then((user) => {
          req.user = user;
          next();
        });
      }
    });
  }
};
