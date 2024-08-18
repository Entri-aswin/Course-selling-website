import express from "express";
import { createCourse, getCourseDetails, getCourseList, updateCourse } from "../../controllers/courserController.js";
import { upload } from "../../middlewares/uploadMiddleware.js";
import { authInstructor } from "../../middlewares/authInstructor.js";
import { authUser } from "../../middlewares/authUser.js";

const router = express.Router();

router.get("/courseList", authUser, getCourseList);
router.get("/details/:id", authUser, getCourseDetails);


router.post("/create", upload.single("image"), authInstructor, createCourse);
router.put("/update/:id", upload.single("image"), authInstructor, updateCourse);
router.delete("/delete");

export default router;
