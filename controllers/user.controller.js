const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require('../models/index');
const Users = db.users;
const Op = db.Sequelize.Op;

// Signup route for user 
exports.signup = async (req, res) => {
    try {
        const existUser = await Users.findOne({ where: {email: req.body.email} });
        if (existUser) {
            return res.status(400).json({message: "This user already exists"});
        }

        const user = {
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        const newUser = await Users.create(user);
        res.status(201).json(newUser);
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

exports.login = async(req, res) => {
    try {
        const user = await Users.findOne({ where: { email: req.body.email }});
        if (!user) {
            return res.status(400).json({ message: "This user not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credintial" });
        }

        token = jwt.sign({ "id" : user.id, "email" : user.email }, process.env.JWT_SECRET, { expiresIn: "3d" });

        res.status(200).json({user, token})

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}