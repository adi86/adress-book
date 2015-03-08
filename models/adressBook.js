var mongoose = require('mongoose');

var AdressBookSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    contact: {
        "email": String,
        "street": String,
        "city": String,
        "zipCode": String
    },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AdressBook', AdressBookSchema);