import express from "express";
import { createCourse, getCourseList, updateCourse } from "../../controllers/courserController.js";
import { upload } from "../../middlewares/uploadMiddleware.js";
import { authInstructor } from "../../middlewares/authInstructor.js";

const router = express.Router();

router.get("/courseList", getCourseList);
router.post("/create", upload.single("image"), authInstructor,  createCourse);
router.put("/update/:id", updateCourse);
router.delete("/delete");

export default router;
