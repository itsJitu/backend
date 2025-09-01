const express = require("express");

const router = express.Router();

const { addUser, getUser } = require("../controllers/user.controllers");

router.post("/add", addUser);
router.get("/:id", getUser);

module.exports = router;