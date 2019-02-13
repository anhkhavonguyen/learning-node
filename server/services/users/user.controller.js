const userList = require('../users/user.model');


exports.get = function (req, res) {
    userList.getAllLists((err, lists) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, lists: lists }, null, 2));
            res.end();
        }
    });
};

exports.post = function (req, res) {
    let newUser = new userList({
        username: req.body.username,
        password: req.body.password
    });
    userList.addList(newUser, (err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
        } else {
            res.json({ success: true, message: "Added successfully." });
        }
    })
}

exports.delete = function (req, res, next) {
    let id = req.params.id;
    console.log(id);
    userList.deleteListById(id, (err, list) => {
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