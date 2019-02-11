const express = require("express");
const router = express.Router();
var postController = require("../services/posts/post.controller");

router
    .route("/post")
    .get(function (req, res) {
        res.send('Hello Post!');
    })

module.exports = router;