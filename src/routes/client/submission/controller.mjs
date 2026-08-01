import HttpResponse from "../../../utils/response.mjs";
import AppConst from "../../../constants/app.mjs";
import SubmissionModel from "../../../models/submission.mjs";
class SubmissonController {
    async getSubmissons(req, res) {
        try {
            const { PAGE, LIMIT } = AppConst.PAGINATION;
            const { project_id, form_id, page = PAGE, limit = LIMIT } = req.query;
            const currentPage = Number(page);
            const pageLimit = Number(limit);
            const skip = (currentPage - 1) * pageLimit;
            const filters = {
                uid: req.user?.uid,
            };
            if (project_id)
                filters.project = project_id;
            if (form_id)
                filters.form = form_id;
            const [submissions, total] = await Promise.all([
                SubmissionModel.find(filters)
                    .populate([
                    {
                        path: "form",
                        select: "title description",
                    },
                    {
                        path: "project",
                        select: "name description",
                    },
                ])
                    .sort({ createdAt: -1 })
                    .skip(skip)
                    .limit(pageLimit)
                    .lean(),
                SubmissionModel.countDocuments(filters),
            ]);
            HttpResponse.ok(res, {
                data: submissions,
                pagination: {
                    page: currentPage,
                    limit: pageLimit,
                    total,
                    totalPages: Math.ceil(total / pageLimit),
                    hasNext: currentPage * pageLimit < total,
                    hasPrevious: currentPage > 1,
                },
            });
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
}
export default SubmissonController;
