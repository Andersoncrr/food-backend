import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "@/routes";
import { errorHandlerMiddleware } from "@/middlewares";

dotenv.config();
const app: Express = express();

mongoose.connect("mongodb://localhost:27017");
console.log("Connected to MongoDB");

app.listen(5001, () => {
  console.log(`[server]: Server is running at http://localhost:${5001}`);
});

app.use(express.json());

app.use("/api", router);
app.use(errorHandlerMiddleware);
