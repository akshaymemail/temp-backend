import ProjectModel from "../../../models/project.mjs";
import AppUitls from "../../../utils/app.mjs";
import HttpResponse from "../../../utils/response.mjs";
class ProjectController {
    async getProjects(req, res) {
        // Your logic to get projects here
        try {
            const projects = await ProjectModel.find({ uid: req.user?.uid }).lean();
            HttpResponse.ok(res, projects);
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
    async createProject(req, res) {
        // Your logic to create a project here
        const fields = AppUitls.pickFields(req.body, ["name", "description"]);
        try {
            const newProject = new ProjectModel({
                uid: req.user?.uid,
                ...fields,
            });
            await newProject.save();
            HttpResponse.created(res, newProject);
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
    async updateProject(req, res) {
        // Your logic to update a project here
        const projectId = req.params.id;
        const fields = AppUitls.pickFields(req.body, ["name", "description"]);
        try {
            const updatedProject = await ProjectModel.findOneAndUpdate({ _id: projectId, uid: req.user?.uid }, fields, { new: true }).lean();
            if (updatedProject) {
                HttpResponse.ok(res, updatedProject);
            }
            else {
                HttpResponse.notFound(res, "Project not found");
            }
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
    async deleteProject(req, res) {
        // Your logic to delete a project here
        const projectId = req.params.id;
        try {
            const deletedProject = await ProjectModel.findOneAndDelete({
                _id: projectId,
                uid: req.user?.uid,
            }).lean();
            if (deletedProject) {
                HttpResponse.ok(res, { message: "Project deleted successfully" });
            }
            else {
                HttpResponse.notFound(res, "Project not found");
            }
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
}
export default ProjectController;
