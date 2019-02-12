const userController = require("../services/users/user.controller");
const express = require("express");
const router = express.Router();
router
    .route("/user")
    .get(userController.get)

module.exports = router;


