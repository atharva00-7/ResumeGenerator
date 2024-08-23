const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/signUp");
const { login } = require("../controllers/logIn");

router.post("/signup", signUp);
router.post("/login", login);
module.exports = router;
