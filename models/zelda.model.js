const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    firstGame: {
        type: String,
        required: [true, "1st game is required"]
    },
    secondGame: {
        type: String,
        required: [true, "2nd game is required"]
    },
    thirdGame: {
        type: String,
        required: [true, "3rd game is required"]
    },
    fourthGame: {
        type: String,
        required: [true, "4th game is required"]
    },
    fifthGame: {
        type: String,
        required: [true, "5th game is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
}, { timestamps: true });

module.exports = mongoose.model('List', ListSchema);