var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    year: Number,
    author: { type: Schema.Types.ObjectId, ref: 'author' }
});

const BookList = module.exports = mongoose.model('book', BookSchema);

module.exports.getAllLists = (callback) => {
    BookList.find(callback).populate('author').exec();
}

module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

module.exports.deleteListById = (id, callback) => {
    let query = { _id: id };
    BookList.remove(query, callback);
}

