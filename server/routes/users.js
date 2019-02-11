const controller = require("../services/users/user.controller");
const express = require("express");
const router = express.Router();

router
    .route("/user")
    .get(function (req, res) {
        res.send('Hello User!');
    })

module.exports = router;


