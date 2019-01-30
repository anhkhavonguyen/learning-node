var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome!')
});

//routes
router.use('./users', require('./users').router);

//export
module.exports.router = router;


