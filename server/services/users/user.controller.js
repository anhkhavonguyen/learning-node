const userList = require('../users/user.model');
const esSearch = require('../search/search');

exports.get = function (req, res) {
    var pageNo = parseInt(req.query.pageNo);
    var pageSize = parseInt(req.query.pageSize);

    userList.get(pageNo, pageSize, (err, data) => {
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

exports.post = function (req, res) {
    var password = require('crypto').createHash('sha1').update(req.body.password).digest('base64');
    let newUser = new userList({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        username: req.body.username,
        password: password,
        avatar: req.body.avatar,
    });

    userList.add(newUser, (err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
        } else {
            res.json({ success: true, message: "Added successfully." });
        }
    })
}

exports.delete = function (req, res, next) {
    let id = req.params.id;
    userList.delete(id, (err, list) => {
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


exports.search = function (req, res, next) {
    await esSearch.queryTerm(term, offset);
}

// router.get('/search', async (ctx, next) => {
//     const { term, offset } = ctx.request.query
//     ctx.body = await search.queryTerm(term, offset)
//   }
// )