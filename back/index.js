import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { usersRouter } from "./src/routes/users.js";

const app = express();
const port = 5002;
const mongoUrl = "mongodb://127.0.0.1:27017/project_blog";

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(morgan("combined"));

// ROUTES
app.use("/users", usersRouter);

// CONNECT TO MONGO DB
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => {
    console.log("Connect to DB");
    app.listen(port, () => {
      console.log(`Server is running (port ${port})`);
    });
  })
  .catch((err) => {
    console.log("Not connect to DB");
  });