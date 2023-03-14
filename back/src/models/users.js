import mongoose from "mongoose";
// import {articlesSchema} from "../models/articles.js";

const usersSchema = mongoose.Schema({
    email : { type: String, required: true },
    username : { type: String, required: true },
    password : { type: String, required: true },
    // avatar : { type: String, required: true },
    // articles : [articlesSchema],
  },
  { timestamps: true }
  );

  export const Users = mongoose.model("Users", usersSchema);