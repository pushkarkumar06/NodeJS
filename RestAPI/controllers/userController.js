const UserActivation = require("../models/user");

// GET all users
exports.getAllUsers = async (req, res) => {
    const allDbUsers = await UserActivation.find({});
    res.setHeader("X-MyName", "Piyush Garg");
    return res.json(allDbUsers);
};

// GET user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await UserActivation.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong!", error: err.message });
    }
};

// CREATE user
exports.createUser = async (req, res) => {
    let { _id, first_name, last_name, email, gender, job_title } = req.body;

    if (!first_name || !last_name || !email || !gender || !job_title) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        // If _id is not provided, generate the next sequential numeric id as a string
        if (!_id) {
            // Find all users with numeric _id
            const users = await UserActivation.find({}, { _id: 1 });
            // Filter to only numeric _id values
            const numericIds = users
                .map(u => Number(u._id))
                .filter(n => !isNaN(n) && isFinite(n));
            let nextId = 1;
            if (numericIds.length > 0) {
                nextId = Math.max(...numericIds) + 1;
            }
            _id = String(nextId);
        }
        const result = await UserActivation.create({ _id, first_name, last_name, email, gender, job_title });
        return res.status(201).json({ msg: "User created successfully", user: result });
    } catch (err) {
        return res.status(500).json({ msg: "Database error", error: err.message });
    }
};


// UPDATE user
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await UserActivation.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.json({ msg: "User updated", updatedUser });
    } catch (err) {
        return res.status(500).json({ msg: "Update failed", error: err.message });
    }
};

// DELETE user
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserActivation.findOneAndDelete({ _id: req.params.id });
        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.json({ msg: "User deleted successfully" });
    } catch (err) {
        return res.status(500).json({ msg: "Delete failed", error: err.message });
    }
};
