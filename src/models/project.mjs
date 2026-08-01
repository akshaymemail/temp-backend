import { Schema, model } from "mongoose";
// Create the Mongoose schema
const ProjectSchema = new Schema({
    uid: {
        type: String,
        required: true,
        ref: "User",
    },
    name: {
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
// Create the Mongoose model
const ProjectModel = model("Project", ProjectSchema);
export default ProjectModel;
