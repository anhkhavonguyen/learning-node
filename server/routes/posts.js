const express = require("express");
const router = express.Router();
var postController = require("../services/posts/post.controller");

router
    .route("/")
    .get(postController.get)
    .post(postController.post)

router
    .route("/:id")
    .delete(postController.delete)

module.exports = router;