const express = require("express");
const { userRegister } = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/register", userRegister);

module.exports = Router;
