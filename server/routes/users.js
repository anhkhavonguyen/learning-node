const controller = require('../services/users/user.controller');
const express = require('express');
const router = express.Router();

router.get('/users', controller.allBooks);
router.post('/', controller.saveUserBook);

module.exports = router;
