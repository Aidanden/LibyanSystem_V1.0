import express from "express";
import { create } from "../controller/peopleController.js";


const route = express.Router();
route.post("/people",create);


export default route;

