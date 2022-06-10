const { User } = require("../models/index");

module.exports = {
  show(req, res, next) {
    if (req.user.id === req.post.userId || User.isAdmin(req.user.roles)) {
      next();
    } else {
      res
        .status(401)
        .json({ msg: "You are not authorized to view this post." });
    }
  },

  update(req, res, next) {
    if (req.user.id === req.post.userId || User.isAdmin(req.user.roles)) {
      next();
    } else {
      res
        .status(401)
        .json({ msg: "You are not authorized to view this post." });
    }
  },

  delete(req, res, next) {
    if (req.user.id === req.post.userId || User.isAdmin(req.user.roles)) {
      next();
    } else {
      res
        .status(401)
        .json({ msg: "You are not authorized to view this post." });
    }
  },
};
