var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
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

