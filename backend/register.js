const mongoose = require("mongoose");
const register = mongoose.Schema({
  Name: {
    type: "String",
    required: true,
  },
  Mail: {
    type: "String",
    required: true,
  },
  Password: {
    type: "String",
    required: true,
  },
});
module.exports = mongoose.model("register", register);
