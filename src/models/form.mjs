import { Schema, model } from "mongoose";
// Create the Mongoose schema
export const FormSchema = new Schema({
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
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });
const FormModel = model("Form", FormSchema);
export default FormModel;
