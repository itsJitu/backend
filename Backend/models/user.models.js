const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,
    // },
    password: {
        type: String,
        required: true,
    },
    // phone: {
    //     type: Number,
    //     required: true,
    // },
    email: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },

});

const userModel = mongoose.model("userDetails", userSchema);

module.exports = userModel;