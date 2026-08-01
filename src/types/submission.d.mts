import { Document } from "mongoose";
export interface ISubmission extends Document {
    uid: string;
    project: string;
    form: string;
    data: Record<string, any>;
}
