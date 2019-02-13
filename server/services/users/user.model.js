var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String
});

const UserList = module.exports = module.exports = mongoose.model('user', UserSchema);

module.exports.getAllLists = (callback) => {
    UserList.find(callback);
}

module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

module.exports.deleteListById = (id, callback) => {
    let query = { _id: id };
    UserList.remove(query, callback);
}