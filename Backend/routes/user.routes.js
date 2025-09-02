const express = require("express");

const router = express.Router();

const { addUser, getUser, logIn } = require("../controllers/user.controllers");

router.post("/add", addUser);
router.get("/:id", getUser);
router.post("/login", logIn);


module.exports = router;