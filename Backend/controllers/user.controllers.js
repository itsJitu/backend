
const userModel = require("../models/user.models");

// Register---------------------------------------------------------------------------------------------------------------
const addUser = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;

        if (!fname || !lname || !email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const newUser = new userModel({ fname, lname, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(400).json({ Error: err.message });
    }
};

// Login-------------------------------------------------------------------------------------------------------------------
const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // search user by email
        const data = await userModel.findOne({ email: email });

        if (!data) {
            return res.status(400).json({ message: "User not found" });
        }

        if (data.password !== password) {
            return res.status(401).json({ message: "password wrong" });
        }

        res.status(200).json({ message: "Login successful", data });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUser = async (req, res) => {
    try {
        const User = await userModel.findById(req.params.id);
        res.status(200).json(User);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addUser, getUser, logIn };