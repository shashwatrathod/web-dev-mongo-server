import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helloController from "./controllers/hello-controller.js";
import tuitController from "./controllers/tuit-controller.js";
import userController from "./controllers/user-controller.js";
import mongoose from "mongoose";

dotenv.config();

const mongoConnectionString =
  process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/webdev";

mongoose.connect(mongoConnectionString);

const app = express();

app.use(cors());

app.use(express.json());

helloController(app);
userController(app);
tuitController(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
