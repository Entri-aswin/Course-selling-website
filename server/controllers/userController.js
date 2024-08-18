import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import { generateUserToken } from "../utils/generateToken.js";

export const userCreate = async (req, res, next) => {
    try {
        const { name, email, password, mobile, profilePic, courses } = req.body;
        if (!name || !email || !password || !mobile) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(404).json({ success: false, message: "user already exist" });
        }

        //hashing
        const salt = 10;
        const hashedPassword = bcrypt.hashSync(password, salt);

        //create new user
        const newUser = new User({ name, email, password: hashedPassword, mobile, profilePic, courses });
        await newUser.save();

        //create token
        const token = generateUserToken(email);

        res.cookie("token", token);
        res.json({ success: true, message: "user created successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(404).json({ success: false, message: "user does not exist" });
        }

        const passwordMatch = bcrypt.compareSync(password, userExist.password);

        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: "user not authenticated" });
        }

        const token = generateUserToken(email);

        res.cookie("token", token);

        res.json({ success: true, message: "user login successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};
export const userLogout = async (req, res, next) => {
    try {
        res.clearCookie("token");

        res.json({ success: true, message: "user logout successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const userProfile = async (req, res, next) => {
    try {
        const user = req.user;

        const useData = await User.findOne({email:user.email}).select("-password");
        // const useData = await User.findById(id).select("-password");

        res.json({ success: true, message: "user data fetched", data: useData });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const checkUser = async (req, res, next) => {
    try {
        const user = req.user;

        if (!user) {
            return res.status(400).json({ success: true, message: "user not authenticated" });
        }
        res.json({ success: true, message: "User authenticated" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};
