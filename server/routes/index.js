import e from "express";
import v1Router from "./v1/index.js";

const apiRouter = e.Router();

apiRouter.use('/v1', v1Router )
// apiRouter.use('/v2', v1Router )
// apiRouter.use('/v3', v1Router )


export default apiRouter