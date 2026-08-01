import { Response } from "express";
declare class HttpResponse {
    private static isProduction;
    private static error;
    private static success;
    static ok<T>(res: Response, data: T, message?: string): void;
    static created<T>(res: Response, data: T, message?: string): void;
    static badRequest(res: Response, message?: string, details?: any): void;
    static unauthorized(res: Response, details?: any, message?: string): void;
    static notFound(res: Response, message?: string, details?: any): void;
    static internalServerError(res: Response, details?: any, message?: string): void;
    static validationError(res: Response, errors: any): void;
}
export default HttpResponse;
