module.exports = function() {
    var mongoose = require('mongoose');
    var http = require('http');
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId;
	mongoose.Promise = global.Promise;
    var conn = mongoose.connect('mongodb://localhost/user_details_db');
    var user_details = mongoose.Schema({
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true }
    }, {
        collection: 'user_details',
        strict: true
    });
    var get_data = conn.model(get_data, user_details);
    return function(req, res, next) {
        req.fetch = get_data;
        next();
    }
}
