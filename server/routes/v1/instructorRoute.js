import express from "express";
import { checkInstructor, instructorCreate, instructorProfile } from "../../controllers/instructorController";
import { authInstructor } from "../../middlewares/authInstructor";
const router = express.Router();

router.post("/create", instructorCreate);
router.post("/login");
router.get("/profile/:id", authInstructor, instructorProfile);

router.get("/check-instructor", authInstructor, checkInstructor);



export default router;
