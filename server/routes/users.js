const userController = require("../services/users/user.controller");
const express = require("express");
const router = express.Router();
router
    .route("/")
    .get(userController.get)
    .post(userController.post)

router
    .route("/:id")
    .delete(userController.delete)

module.exports = router;


