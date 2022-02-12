const User = require("../models/user.models.js");

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.status(200).json({
            data: user,
            message: "Successfully Created User",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

const findAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            data: users,
            message: "Successfully Retreived Users",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

const findUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            data: user,
            message: "Successfully Retreived User",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
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
};

const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            data: user,
            message: "Successfully Deleted User",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

module.exports = {
    createUser,
    findAllUser,
    findUserById,
    updateUserById,
    deleteUserById,
};
