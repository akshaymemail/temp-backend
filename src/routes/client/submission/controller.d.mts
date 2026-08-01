import { AuthRequest } from "../../../types/main.mjs";
import { Response } from "express";
declare class SubmissonController {
    getSubmissons(req: AuthRequest, res: Response): Promise<void>;
}
export default SubmissonController;
