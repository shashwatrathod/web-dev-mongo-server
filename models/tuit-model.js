import mongoose from "mongoose";
import tuitSchema from "../schemas/tuit-schema.js";

const tuitsModel = mongoose.model("TuitModel", tuitSchema);

export default tuitsModel;
