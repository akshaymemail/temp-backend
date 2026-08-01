import express from "express";
import AuthValidators from "../../../validators/auth.mjs";
import validate from "../../../lib/validator.mjs";
import AuthControllers from "./controller.mjs";
// express router for auth
const authRoutes = express.Router();
// auth controller instance
const controllers = new AuthControllers();
// auth routes
authRoutes.post("/signin", AuthValidators.login, validate, controllers.signin);
authRoutes.post("/signup", AuthValidators.signup, validate, controllers.register);
export default authRoutes;
