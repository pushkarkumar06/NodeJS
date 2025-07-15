const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: String,  // ✅ Declare your own _id of type String
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    job_title: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("UserActivation", userSchema);
