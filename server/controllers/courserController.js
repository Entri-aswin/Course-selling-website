import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import { Course } from "../models/courseModel.js";

export const getCourseList = async (req, res, next) => {
    try {
        const courseList = await Course.find();

        res.json({ success: true, message: "fetched course list", data: courseList });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const createCourse = async (req, res, next) => {
    try {
        const { title, desc, duration, instructor } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "image not visible" });
        }

        const course = await Course.findOne({ title: title });

        if (course) {
            return res.status(400).json({ message: "course already exist" });
        }

        // Upload an image
        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path).catch((error) => {
            console.log(error);
        });

        console.log(uploadResult);

        const newCourse = new Course({ title, desc, duration, instructor });
        if (uploadResult?.url) {
            newCourse.image = uploadResult.url;
        }
        await newCourse.save();

        res.json({ success: true, message: "new course created successfully", data: newCourse });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const updateCourse = async (req, res, next) => {
    try {
        const { title, desc,  duration, instructor } = req.body;
        const { id } = req.params;

        const updatedCourse = await Course.findByIdAndUpdate(id, { title, desc,  duration, instructor }, { new: true });

        res.json({ success: true, message: "course updated", data: updatedCourse });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};
