import { Response } from "express";
import { AuthRequest } from "../../../types/main.mjs";
declare class UserController {
    getProfile(req: AuthRequest, res: Response): Promise<void>;
}
export default UserController;
