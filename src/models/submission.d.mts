import { ISubmission } from "../types/submission.mjs";
declare const SubmissionModel: import("mongoose").Model<ISubmission, {}, {}, {}, import("mongoose").Document<unknown, {}, ISubmission, {}, import("mongoose").DefaultSchemaOptions> & ISubmission & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ISubmission>;
export default SubmissionModel;
