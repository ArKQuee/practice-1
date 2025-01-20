const User = require('../models/userModel');

const signup = async (req, res) => {
    try {
        const { email, password, name, dateOfBirth } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send("User already exists");
        }

        const newUser = new User({
            name,
            email,
            password,
            dateOfBirth,
        });
        await newUser.save();
        res.status(201).send({ data: newUser, message: "user created successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
};

module.exports = { signup };