import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";

import authRouter from "./routes/auth.route.js";
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb connected !!")
}).catch((err)=>{
    console.log(err);
});
const app =express()
app.listen(3000,()=>{


    console.log("server running on port 3000!!??");
});
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

