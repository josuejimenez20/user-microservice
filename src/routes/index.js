import express from "express";
import userRouter from "./users/usersRoutes.js";
import healthCheckRouter from "./health_check.js";

const app = express();

app.use('/users', userRouter);

app.use('/health-check', healthCheckRouter)

export default app;