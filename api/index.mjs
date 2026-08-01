import dotenv from "dotenv";
dotenv.config({
    path: ".env.production",
});
import app, { connectDB } from "../src/app.mjs";
let isConnected = false;
export default async function handler(req, res) {
    if (!isConnected) {
        await connectDB();
        isConnected = true;
    }
    return app(req, res);
}
