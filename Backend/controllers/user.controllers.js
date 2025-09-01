const userModel = require("../models/user.models");


const addUser = async (req, res) => {
    try {
        // console.log('Request Body:', req.body);
        const {fname, lname, email, password } = req.body;

        if(!fname || !lname || !email || !password) {
            return res.status(400).json({error: 'Missing required fields'});
        }

        const newUserModel = new userModel({
            fname,
            lname,
            email,
            password,
        });
        await newUserModel.save();
        res.status(201).json(newUserModel);
    } catch (err) {
        // console.error('Error in addUser:', err);
        res.status(400).json({ Error: err.message });
    }
};

const getUser = async (req, res) => {
    try {
        const User = await userModel.findById(req.params.id);
        res.status(200).json(User);
    } catch (err) {
        res.status(500).json({error : err.message})
    }
};

module.exports = { addUser, getUser };