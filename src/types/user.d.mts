import { Document } from "mongoose";
export interface MUser extends Document {
    org_name: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
