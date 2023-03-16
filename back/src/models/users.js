import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    email : { type: String, required: true },
    username : { type: String, required: true },
    password : { type: String, required: true },
  },
  { timestamps: true }
  );

  export const Users = mongoose.model("Users", usersSchema);