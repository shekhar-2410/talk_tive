const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../../modals/userModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../../middleware/fetchUser");

module.exports=router;