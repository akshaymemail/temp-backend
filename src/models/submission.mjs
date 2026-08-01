import { Schema, model } from "mongoose";
const submissionSchema = new Schema({
    uid: {
        type: String,
        required: true,
        ref: "User",
    },
    project: {
        type: String,
        required: true,
        ref: "Project",
    },
    form: {
        type: String,
        required: true,
        ref: "Form",
    },
    data: {
        type: Object,
        required: true,
    },
}, { timestamps: true });
const SubmissionModel = model("Submission", submissionSchema);
export default SubmissionModel;
