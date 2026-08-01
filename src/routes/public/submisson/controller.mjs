import FormModel from "../../../models/form.mjs";
import ProjectModel from "../../../models/project.mjs";
import SubmissionModel from "../../../models/submission.mjs";
import HttpResponse from "../../../utils/response.mjs";
class SubmissionControllers {
    async submit(req, res) {
        try {
            const { project_id, form_id } = req.params;
            if (!project_id)
                return HttpResponse.badRequest(res, "project_id is required");
            if (!form_id)
                return HttpResponse.badRequest(res, "form_id is required");
            // check if project exist or not
            const project = await ProjectModel.findById(project_id).lean();
            if (!project)
                return HttpResponse.badRequest(res, "Project not found!");
            // check if form is exist or not
            const form = await FormModel.findById(form_id).lean();
            if (!form)
                return HttpResponse.badRequest(res, "Form not found");
            // now create submission
            await SubmissionModel.create({
                uid: project.uid,
                project: project_id,
                form: form_id,
                data: req.body,
            });
            HttpResponse.created(res, "Submitted successfully");
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
}
export default SubmissionControllers;
