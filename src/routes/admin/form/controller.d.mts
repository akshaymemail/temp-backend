import { Response } from "express";
import { AuthRequest } from "../../../types/main.mjs";
declare class FormController {
    getForms(req: AuthRequest, res: Response): Promise<void>;
    createForm(req: AuthRequest, res: Response): Promise<void>;
    updateForm(req: AuthRequest, res: Response): Promise<void>;
    deleteForm(req: AuthRequest, res: Response): Promise<void>;
}
export default FormController;
