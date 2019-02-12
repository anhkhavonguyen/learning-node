//Require the express package and use express.Router()
const postList = require('../posts/post.model');

exports.get = function (req, res) {
    postList.getAllLists((err, lists) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, lists: lists }, null, 2));
            res.end();
        }
    });
};

exports.post = function (req, res, next) {
    let newPost = new postList({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    });
    postList.addList(newPost, (err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
        }
        else
            res.json({ success: true, message: "Added successfully." });
    });
}

exports.delete = function (req, res, next) {
    let id = req.params.id;
    console.log(id);
    postList.deleteListById(id, (err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to delete the list. Error: ${err}` });
        }
        else if (list) {
            res.json({ success: true, message: "Deleted successfully" });
        }
        else
            res.json({ success: false });
    })
};
