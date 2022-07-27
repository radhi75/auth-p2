const mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: String,
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});
module.exports = mongoose.model("users", users);
