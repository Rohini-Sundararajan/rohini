const express = require("express");
const router = express.Router();
const register = require("./register");
const contact1 = require("./contactpg");
const course1 = require("./coursebe");
const bcrypt = require("bcrypt");
router.post("/register", async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt();
  const hash1 = await bcrypt.hash(req.body.Password, salt);
  var regform = await register.create({
    Name: req.body.Name,
    Mail: req.body.Mail,
    Password: hash1,
  });
  res.status(200).json(regform);
});
router.post("/contact1", async (req, res) => {
  console.log(req.body);
  var contactform = await contact1.create({
    Name: req.body.Name,
    Mail: req.body.Mail,
    Phoneno: req.body.Phoneno,
    Message: req.body.Message,
  });
  res.status(200).json(contactform);
});
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    var Userdata = await register.findOne({ Name: req.body.Name });
    if (!Userdata) {
      return res.status(200).json({ err: "Username Not Exists" });
    }
    var validation = await bcrypt.compare(req.body.Password, Userdata.Password);
    if (!validation) {
      return res.status(200).json({ err: "Password Incorrect" });
    }
  } catch (err) {
    res.status(404).json(err);
  }
  var usernme = req.body.Name;
  res.status(204).json({ err: null, usernme: usernme });
});

router.post("/course1", async (req, res) => {
  console.log(req.body);
  var courseform = await course1.create({
    Name: req.body.Name,
    Image: req.body.Image,
    usr: req.body.usr,
  });
  res.status(200).json(courseform);
});
router.get("/course1", async (req, res) => {
  var courseform1 = await course1.find();
  res.status(200).json(courseform1);
});
module.exports = router;
