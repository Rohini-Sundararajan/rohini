const express = require("express");
const app = express();
const route = require("./proworldroute");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/proworld", route);
const port = 2000;
app.listen(port, () => console.log(`Example app listening on port port!`));
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/proworld", (err) => {
  if (err) {
    console.log("DB not connected");
  }
  console.log("DB connected successfully");
});
