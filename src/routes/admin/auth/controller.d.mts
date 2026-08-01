import { Request, Response } from "express";
declare class AuthControllers {
    signin(req: Request, res: Response): Promise<void>;
    register(req: Request, res: Response): Promise<void>;
}
export default AuthControllers;
