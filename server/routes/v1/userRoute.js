import express from "express";
import { checkUser, userCreate, userLogin, userLogout, userProfile } from "../../controllers/userController.js";
import { authUser } from "../../middlewares/authUser.js";
const router = express.Router();

router.post("/create", userCreate);
router.post("/login", userLogin);
router.post("/logout", authUser, userLogout);
router.get("/profile/:id", authUser, userProfile);

router.get("/check-user", authUser, checkUser);

export default router;
