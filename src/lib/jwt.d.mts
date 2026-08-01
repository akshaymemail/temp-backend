import { NextFunction, Request, Response } from "express";
import { UserPayload } from "../types/main.mjs";
declare class JWTService {
    static signToken(payload: UserPayload): string;
    static verifyToken(token: string): UserPayload | null;
    static isAuth(req: Request, res: Response, next: NextFunction): void;
}
export default JWTService;
