const router = require("express").Router();
const AdminUser = require("../models/AdminUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Store blacklisted tokens
let blacklist = [];

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const accessToken = req.header("Authorization");
    if (!accessToken) return res.status(401).json("Access Denied");

    // Check if token is blacklisted
    if (blacklist.includes(accessToken)) {
        return res.status(401).json("Token revoked");
    }

    try {
        const verified = jwt.verify(accessToken, process.env.JWT_SEC);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).json("Invalid Token");
    }
};

    router.post("/register/user", async (req, res) => {
        console.log(req.body)
        try {
            console.log("thisi")
            const AlreadyUser = await AdminUser.findOne({email: req.body.data.email})
            console.log(AlreadyUser)

            if (AlreadyUser){
                console.log("exiist")
                return res.json({message: "Use already exist!", exist:true})
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.data.password, salt);

            const newAdminUser = new AdminUser({
                username: req.body.data.username,
                email: req.body.data.email,
                password: hashedPassword
            });

            const savedUser = await newAdminUser.save();
            console.log(savedUser)

            const accessToken = jwt.sign(
                { id: savedUser._id, isAdmin: savedUser.isAdmin, username:savedUser.username  },
                process.env.JWT_SEC,
                { expiresIn: "3d" }
            );
            res.status(201).json({ username:savedUser.username, id:savedUser._id ,accessToken});
        } catch (err) {
            res.status(500).json(err);
        }
    });

router.post("/login/user", async (req, res) => {    
    console.log(req.body)
    try {
        const user = await AdminUser.findOne({ email: req.body.data.email });
        if (!user) {
            return res.json({message:"Wrong Email or password",wrong: true});
        }

        const validPassword = await bcrypt.compare(req.body.data.password, user.password);
        if (!validPassword) {
            return res.json({message:"Wrong Email or password",wrong: true});
        }

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        return res.status(500).json(err.message);
    }
});

router.post("/logout", (req, res) => {
    const accessToken = req.header("Authorization");
    if (!accessToken) return res.status(401).json("Access Denied");

    // Add token to blacklist
    blacklist.push(accessToken);
    res.status(200).json("Logged out successfully");
});

router.get("/profile", verifyToken, async (req, res) => {
    // Route to get user profile, requires valid token
    try {
        const user = await AdminUser.findById(req.user.id);
        if (!user) return res.status(404).json("User not found");
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;
