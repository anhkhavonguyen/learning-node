var express = require('express');
var router = express.Router();
var userRoutes = require('./users');
var postRoutes = require('./posts');
var bookRoutes = require('./books');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/books', bookRoutes);

module.exports = router;


