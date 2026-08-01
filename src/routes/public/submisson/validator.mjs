import { param } from "express-validator";
const validator = {
    submit: [
        param("project_id").notEmpty().withMessage("Project ID is required!"),
        param("form_id").notEmpty().withMessage("Form ID is required!"),
    ],
};
export default validator;
