import express from "express";
import UserController from "./controller.mjs";
import JWTService from "../../../lib/jwt.mjs";
// express router
const userRoutes = express.Router();
// make all routes protected for user
userRoutes.use(JWTService.isAuth);
// user controller instance
const controllers = new UserController();
// user routes
userRoutes.get("/profile", controllers.getProfile);
export default userRoutes;
