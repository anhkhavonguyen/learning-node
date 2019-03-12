const bookList = require('../books/book.model');

exports.get = function (req, res) {
    var pageNo = parseInt(req.query.pageNo);
    var pageSize = parseInt(req.query.pageSize);
    bookList.get(pageNo, pageSize, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        }
        else {
            if (data) {
                var totalPages = Math.ceil(data.length / pageSize);
            }
            res.write(JSON.stringify({ success: true, data: data, totalPages: totalPages }, null, 2));
            res.end();
        }
    });
};

exports.post = function (req, res, next) {
    let newBook = new bookList({
        title: req.body.title,
        year: req.body.year,
        author: req.body.author
    });
    bookList.add(newBook, (err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
        }
        else
            res.json({ success: true, message: "Added successfully." });
    });
}

exports.delete = function (req, res, next) {
    let id = req.params.id;
    bookList.delete(id, (err, list) => {
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
