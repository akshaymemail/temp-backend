import express from "express";
import SubmissonController from "./controller.mjs";
import JWTService from "../../../lib/jwt.mjs";
const submissonRouter = express.Router();
const controllers = new SubmissonController();
submissonRouter.get("/", JWTService.isAuth, controllers.getSubmissons);
export default submissonRouter;
