//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const postList = require('../posts/post.model');


//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
    postList.getAllLists((err, lists) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, lists: lists }, null, 2));
            res.end();
        }
    });
});