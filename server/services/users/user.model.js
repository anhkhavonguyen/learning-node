var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    username: String,
    password: String,
    avatar: String
});

const UserList = module.exports = mongoose.model('user', UserSchema);

module.exports.get = (pageNo, pageSize, callback) => {
    var query = {};
    query.skip = pageSize * (pageNo - 1);
    query.take = pageSize;
    UserList.count({}, function (err, totalItems) {
        UserList.find({}, {}, query, callback);
    });
}

module.exports.add = (newList, callback) => {
    newList.save(callback);
}

module.exports.delete = (id, callback) => {
    let query = { _id: id };
    UserList.remove(query, callback);
}