var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    name: String
});

const AuthorList = module.exports = module.exports = mongoose.model('author', AuthorSchema);

module.exports.getAllLists = (callback) => {
    AuthorList.find(callback);
}

module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

module.exports.deleteListById = (id, callback) => {
    let query = { _id: id };
    AuthorList.remove(query, callback);
}