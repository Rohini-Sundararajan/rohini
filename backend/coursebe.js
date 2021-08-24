const mongoose = require("mongoose");
const coursebe = mongoose.Schema({
  Name: {
    type: "String",
    required: true,
  },
  Image: {
    type: "String",
    required: true,
  },
  usr: {
    type: "String",
    required: true,
  },
});
module.exports = mongoose.model("coursebe", coursebe);
