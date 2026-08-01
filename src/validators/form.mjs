import { body } from "express-validator";
const formValidator = {
    create: [
        body("title").notEmpty().withMessage("Form title is required!"),
        body("description").notEmpty().withMessage("Form description is required!"),
    ],
};
export default formValidator;
