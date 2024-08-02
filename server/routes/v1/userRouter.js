import express from "express";
const router = express.Router();

router.get("/create", async (req, res, next) => {
    console.log("user create route accessed");
});

router.post("/logout", async (req, res, next) => {
    console.log("user post method accessed");
});

export default router;
