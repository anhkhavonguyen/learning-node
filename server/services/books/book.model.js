var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    year: Number,
    author: String  //{ type: Schema.Types.ObjectId, ref: 'author' }
});

const BookList = module.exports = mongoose.model('book', BookSchema);

module.exports.get = (pageNo, pageSize, callback) => {
    var query = {};
    query.skip = pageSize * (pageNo - 1);
    query.take = pageSize;
    BookList.count({}, function (err, totalItems) {
        BookList.find({}, {}, query, callback);
        //BookList.find({}, {}, query, callback).populate('author').exec();
    });
}

module.exports.add = (newList, callback) => {
    newList.save(callback);
}

module.exports.delete = (id, callback) => {
    let query = { _id: id };
    BookList.remove(query, callback);
}

