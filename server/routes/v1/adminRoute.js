import express from "express";
import { authAdmin } from "../../middlewares/authAdmin";
import { Instructor } from "../../models/instructorModel";
import { Course } from "../../models/courseModel";
const router = express.Router();

// router.post("/create", instructorCreate);
router.post("/login");
router.get("/profile/:id", authInstructor, instructorProfile);

router.get("/check-instructor", authInstructor, checkInstructor);

router.get("/getUserlist")
router.get("/getSingleUser")
router.get("/getUserlist")
router.get("/getSingleUser")
router.get("/getUserlist")
router.get("/getSingleUser")



// router.delete('/course/:courseId/:id', authAdmin, async(req,res,next)=>{

// try {
//     const {id, courseId}= req.params;
    

//     const admin = await Instructor.findById(id);
//     //error 

//     const deleteCourse = await Course.findByIdAndDelete(courseId);
//     if(!deleteCourse){
//         //cfdhsklf
//     }

//     res.send('course deleted successfully')


// } catch (error) {
//     console.log(error);
    
    
// }


// })


export default router;
