import { Document } from "mongoose";
export interface MProject extends Document {
    uid: string;
    name: string;
    description: string;
}
