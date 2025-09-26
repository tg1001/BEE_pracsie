const express = require("express");
const router = express.Router();
const users = require("../model/user");

const { postuser, getusers,getuserById}= require("../controller/userController")
router.post("/",postuser);
router.get("/", getusers);
router.get("/:id", getuserById);

module.exports = router;