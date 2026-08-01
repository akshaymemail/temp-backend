import FormModel from "../../../models/form.mjs";
import AppUitls from "../../../utils/app.mjs";
import HttpResponse from "../../../utils/response.mjs";
class FormController {
    async getForms(req, res) {
        // Your logic to get forms here
        try {
            const { project_id } = req.params;
            const forms = await FormModel.find({
                uid: req.user?.uid,
                project: project_id,
            }).lean();
            HttpResponse.ok(res, forms);
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
    async createForm(req, res) {
        try {
            const { project_id } = req.params;
            const fields = AppUitls.pickFields(req.body, ["title", "description"]);
            const form = await FormModel.create({
                uid: req.user?.uid,
                project: project_id,
                ...fields,
            });
            HttpResponse.created(res, form);
        }
        catch (error) {
            console.error("Error creating form", error.message);
            HttpResponse.internalServerError(res);
        }
    }
    async updateForm(req, res) {
        try {
            const { project_id, id } = req.params;
            const fields = AppUitls.pickFields(req.body, ["title", "description"]);
            const form = await FormModel.findOneAndUpdate({ uid: req.user?.uid, project: project_id, _id: id }, fields, { new: true }).lean();
            HttpResponse.ok(res, form);
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
    async deleteForm(req, res) {
        try {
            const { project_id, id } = req.params;
            const form = await FormModel.findOneAndDelete({
                uid: req.user?.uid,
                project: project_id,
                _id: id,
            }).lean();
            HttpResponse.ok(res, form);
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
}
export default FormController;
