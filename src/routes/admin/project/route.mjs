import express from "express";
import ProjectController from "./controller.mjs";
import JWTService from "../../../lib/jwt.mjs";
import projectValidator from "../../../validators/project.mjs";
import validate from "../../../lib/validator.mjs";
import FormController from "../../../routes/admin/form/controller.mjs";
import formValidator from "../../../validators/form.mjs";
const projectRoutes = express.Router();
// make all routes protected
projectRoutes.use(JWTService.isAuth);
// create controller instance
const controllers = new ProjectController();
const formControllers = new FormController();
// create validator
const v = projectValidator;
const fv = formValidator;
// Define your project routes here
projectRoutes.get("/", controllers.getProjects);
projectRoutes.post("/", v.create, validate, controllers.createProject);
projectRoutes.patch("/:id", controllers.updateProject);
projectRoutes.delete("/:id", controllers.deleteProject);
// forms
projectRoutes.get("/:project_id/forms", formControllers.getForms);
projectRoutes.post("/:project_id/forms", fv.create, validate, formControllers.createForm);
projectRoutes.patch("/:project_id/forms/:id", formControllers.updateForm);
projectRoutes.delete("/:project_id/forms/:id", formControllers.deleteForm);
export default projectRoutes;
