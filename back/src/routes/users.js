import express from "express";
import { subscribe, login, getUser} from "../controllers/users.js";

export const usersRouter = express.Router();
usersRouter.post("/subscribe", subscribe);
usersRouter.post("/login", login);
usersRouter.get("/me", getUser);