const express = require("express");
const User = require("../../models/user.models.js");
const userController = require("../../controllers/user.controllers.js");

const router = express.Router();

// @route GET/POST api/users
// @desc Retrieve/Register user
// @access Private
router.route("/").get(userController.findAllUser).post(userController.createUser);

// @route GET/PUT/DELETE api/users/:id
// @desc Get/Update/Delete a single user
// @access Public/Private/Private
router
    .route("/:id")
    .get(userController.findUserById)
    .put(userController.updateUserById)
    .delete(userController.deleteUserById);

module.exports = router;
