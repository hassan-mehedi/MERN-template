const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
    },
    password: {
        type: String,
    },
    contactInformation: {
        address: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
    },
    dateOfBirth: {
        type: Date,
    },
    otherInformation: {
        bloodGroup: {
            type: String,
        },
        education: [{ institutionName: String, degree: String, year: Number }],
        experience: [{ organizationName: String, position: String, year: Number }],
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = User = mongoose.model("User", userSchema);
