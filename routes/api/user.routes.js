const express = require("express");
const USER = require("./models/User");

const router = express.Router();

// @route POST api/users
// @desc Register user
// @access Private
router.route("/").post((req, res) => {
    try {
        const user = new USER(req.body);
        user.save();
        res.status(200).json({
            data: user,
            message: "Successfully Created User",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.route("/").get((req, res) => {
    try {
        const users = USER.find();
        res.status(200).json({
            data: users,
            message: "Successfully Retreived Users",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

// @route GET api/users/:id
// @desc Get a single user
// @access Public
router.route("/:id").get((req, res) => {
    try {
        const user = USER.findById(req.params.id);
        res.status(200).json({
            data: user,
            message: "Successfully Retreived User",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

// @route PUT api/users/:id
// @desc Update a user
// @access Private
router.route("/:id").put((req, res) => {
    try {
        const user = USER.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({
            data: user,
            message: "Successfully Updated User",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

// @route DELETE api/users/:id
// @desc Delete a user
// @access Private
router.route("/:id").delete((req, res) => {
    try {
        const user = USER.findByIdAndDelete(req.params.id);
        res.status(200).json({
            data: user,
            message: "Successfully Deleted User",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
