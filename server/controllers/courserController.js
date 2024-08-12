import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import { Course } from "../models/courseModel.js";
import { Instructor } from "../models/instructorModel.js";
import { imageUploadCloudinary } from "../utils/cloudinary.js";

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
        const { title, desc, duration } = req.body;
        const { user } = req;
        let currentInstructor;
        let imageUrl;

        //check course exist
        const course = await Course.findOne({ title: title });
        if (course) {
            return res.status(400).json({ message: "course already exist" });
        }

        //check role
        if (user.role == "instructor") {
            currentInstructor = await Instructor.findOne({ email: user.email });
        }

        // Upload an image
        if (req.file) {
            imageUrl = await imageUploadCloudinary(req.file.path);
            console.log(imageUrl);
            
        }

        //create new course
        const newCourse = new Course({
            title,
            desc,
            duration,
            image: imageUrl && imageUrl,
            instructor: user.role === "instructor" && currentInstructor,
        });
        await newCourse.save();

        res.json({ success: true, message: "new course created successfully", data: newCourse });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};

export const updateCourse = async (req, res, next) => {
    try {
        const { title, desc, duration, instructor } = req.body;
        const { id } = req.params;

        // const updatedCourse = await Course.findByIdAndUpdate(id, { title, desc, duration, instructor }, { new: true });

    

        res.json({ success: true, message: "course updated", data: updatedCourse });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
};
