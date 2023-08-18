const express = require('express');
const router = express.Router();
const User  = require('../models/user'); // Make sure the path is correct
const mongoose = require('mongoose');

router.post('/', async (req, res) => {
    console.log(req.body);


    try {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).send(`${existingUser.fullname} already registered`);
        }

        const newUser = new User({
            fullname: req.body.fullname,
            username: req.body.username,
            rollno: req.body.rollno,
            year: req.body.year,
            section: req.body.section,
            position: req.body.position,
            password: req.body.password
        });

        const savedUser = await newUser.save();
        console.log(`${savedUser.fullname} is saved`);
        console.log(savedUser);

        res.status(200).json(savedUser);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
});

// Route to get all registered users
router.get('/', async (req, res) => {
    console.log('members router is triggered')
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

module.exports = router;
