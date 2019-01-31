var User = require('./user.model');


exports.get = function (req, res, next) {
    User.find({})
        .populate('user')
        .exec()
        .then(function (users) {
            res.json(users);
        }, function (err) {
            next(err);
        })
};