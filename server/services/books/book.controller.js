const bookList = require('../books/book.model');

exports.get = function (req, res) {
    bookList.getAllLists((err, lists) => {
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
    let newBook = new bookList({
        title: req.body.title,
        year: req.body.year
    });
    bookList.addList(newBook, (err, list) => {
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
    bookList.deleteListById(id, (err, list) => {
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
