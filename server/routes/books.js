const express = require("express");
const router = express.Router();
var bookController = require("../services/books/book.controller");

router
    .route("/")
    .get(bookController.get)
    .post(bookController.post)

router
    .route("/:id")
    .delete(bookController.delete)

module.exports = router;