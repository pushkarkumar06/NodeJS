const mongoose = require("mongoose");
const User = require("./models/user");
let users = require("./MOCK_DATA.json");

// Transform and filter data to match schema
users = users
  .map(user => ({
    _id: String(user.id ?? user._id),
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    gender: user.gender,
    job_title: user.job_title || user["job_title "]
  }))
  .filter(user =>
    user._id &&
    user.first_name &&
    user.last_name &&
    user.email &&
    user.gender &&
    user.job_title
  );

async function importData() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    await User.deleteMany({});
    await User.insertMany(users);
    console.log(`Users imported from MOCK_DATA.json! Imported: ${users.length}`);
    process.exit(0);
  } catch (err) {
    console.error("Error importing users:", err);
    process.exit(1);
  }
}

importData();