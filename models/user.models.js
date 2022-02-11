const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
    },
    password: {
        type: String,
        required: true,
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
        required: true,
    },
    otherInformation: {
        bloodGroup: {
            type: String,
        },
        education: [{ institutionName: String, degree: String, year: Number }],
        experience: [{ organizationName: String, position: String, year: Number }],
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    createdAt: new Date(),
});
