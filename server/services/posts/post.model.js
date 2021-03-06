var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    description: String,
    category: String,
    authors: { type: Schema.Types.ObjectId, ref: 'author' }
});

const PostList = module.exports = mongoose.model('post', PostSchema);

module.exports.getAllLists = (callback) => {
    PostList.find(callback);
}

module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

module.exports.deleteListById = (id, callback) => {
    let query = { _id: id };
    PostList.remove(query, callback);
}

