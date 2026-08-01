import { body } from "express-validator";
const projectValidator = {
    create: [
        body("name").notEmpty().withMessage("Project name is required!"),
        body("description")
            .notEmpty()
            .withMessage("Project description is required!"),
    ],
    // update: [
    //   body("name").optional().withMessage("Project name is required!"),
    //   body("description")
    //     .optional()
    //     .withMessage("Project description is required!"),
    // ],
    // delete: [param("id").notEmpty().withMessage("Project ID is required!")],
};
export default projectValidator;
