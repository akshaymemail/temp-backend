import { Schema, model } from "mongoose";
// Create the Mongoose schema
const UserSchema = new Schema({
    org_name: {
        type: String,
        required: true,
        trim: true,
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });
// Create the Mongoose model
const UserModel = model("User", UserSchema);
export default UserModel;
