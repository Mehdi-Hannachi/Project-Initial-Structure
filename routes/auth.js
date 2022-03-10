const express = require("express");
const { userRegister } = require("../controllers/user.controller");

const Router = express.Router();

//@Method : POST
//@desc : Register user
//@api : http://localhost:7500/api/auth/register

Router.post("/register", userRegister);

module.exports = Router;
