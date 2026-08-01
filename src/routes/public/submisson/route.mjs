import express from "express";
import validator from "./validator.mjs";
import validate from "../../../lib/validator.mjs";
import SubmissionControllers from "./controller.mjs";
const submissonRouter = express.Router();
// create controller
const controllers = new SubmissionControllers();
submissonRouter.post("/project/:project_id/form/:form_id/submit", validator.submit, validate, controllers.submit);
export default submissonRouter;
