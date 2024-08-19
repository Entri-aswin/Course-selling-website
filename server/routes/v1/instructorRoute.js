import express from "express";
import {
    checkInstructor,
    getFullDetails,
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

router.get('/fullDetails',authInstructor, getFullDetails)



export default router;
