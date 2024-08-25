import express from "express";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/peopleRoute.js";



const app =express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;
const mongourl = process.env.MONGO_URL;


mongoose
.connect(mongourl).then(()=>{
    console.log("mongodb connected successfuly.")
    app.listen(PORT,()=>{
        console.log(`Server Runnig on port :  ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)})


app.use("/api",route)