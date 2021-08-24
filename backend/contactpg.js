const mongoose = require("mongoose");
const contactpg = mongoose.Schema({
  Name: {
    type: "String",
    required: true,
  },
  Mail: {
    type: "String",
    required: true,
  },
  Phoneno: {
    type: "String",
    required: true,
  },
  Message: {
    type: "String",
    required: true,
  },
});
module.exports = mongoose.model("contactpg", contactpg);
