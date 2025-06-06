import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from './database/DBconnection.js';
import {errorMiddleware} from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js'

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(cors({
    // origin: [process.env.FRONTEND_URL],
    origin: [`process.env.https://genuine-donut-5b2aa5.netlify.app/`] || 4345,
    methods: ["POST"],
    credentials:true 
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", reservationRouter);


dbconnection();

app.use(errorMiddleware);

export default app;
