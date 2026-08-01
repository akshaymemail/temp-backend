import { Response } from "express";
import { AuthRequest } from "../../../types/main.mjs";
declare class ProjectController {
    getProjects(req: AuthRequest, res: Response): Promise<void>;
    createProject(req: AuthRequest, res: Response): Promise<void>;
    updateProject(req: AuthRequest, res: Response): Promise<void>;
    deleteProject(req: AuthRequest, res: Response): Promise<void>;
}
export default ProjectController;
