import express from "express";
import {
    checkInstructor,
    instructorCreate,
    instructorLogin,
    instructorProfile,
    instructorUpdate,
} from "../../controllers/instructorController.js";
import { authInstructor } from "../../middlewares/authInstructor.js";
const router = express.Router();

router.post("/create", instructorCreate);
router.post("/login", instructorLogin);

router.get("/profile/:id", authInstructor, instructorProfile);

router.get("/check-instructor", authInstructor, checkInstructor);

router.put("/update/:id", authInstructor, instructorUpdate);




export default router;
