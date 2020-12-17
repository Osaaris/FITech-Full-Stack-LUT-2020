const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const User = require("../models/user");

// Register
router.post("/register", (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, message: ("User registeration failed") });
        } else {
            res.json({ success: true, message: ("User registeration success") });
        }
    });
});

// Authenticate
router.post("/authenticate", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: "JWT " + token,
                    user: {
                        id: user.id,
                        name: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({ success: false, message: "Wrong password" });
            }
        });
    });
});

// Profile
router.get("/profile", passport.authenticate("jwt", { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});

module.exports = router;