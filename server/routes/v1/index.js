import express from "express";
import userRouter from "./userRoute.js";
import courseRouter from "./courseRoute.js";
import instructorRouter from './instructorRoute.js'
import paymentRouter from './paymentRoute.js'

const v1Router = express.Router();

v1Router.use("/user", userRouter);
v1Router.use("/course", courseRouter);
v1Router.use("/instructor", instructorRouter );
v1Router.use("/payment", paymentRouter );

export default v1Router;
