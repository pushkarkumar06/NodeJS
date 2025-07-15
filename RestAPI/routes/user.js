const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET all users => GET /users/
router.get("/", userController.getAllUsers);

// GET a user by ID => GET /users/:id
router.get("/:id", userController.getUserById);

// POST create new user => POST /users/
router.post("/", userController.createUser);

// PATCH update user by ID => PATCH /users/:id
router.patch("/:id", userController.updateUser);

// DELETE user by ID => DELETE /users/:id
router.delete("/:id", userController.deleteUser);

module.exports = router;



