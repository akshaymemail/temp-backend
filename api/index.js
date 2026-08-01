import dotenv from "dotenv";
dotenv.config({ path: ".env.production" });
// Set fallback env variables in case Vercel bundler excluded .env files and env vars aren't set in dashboard
if (!process.env.MONGODB_URI) {
    process.env.MONGODB_URI = "mongodb+srv://akshay_db_user:SIrdSCPwE3i5spLd@trioford.zld8jrt.mongodb.net/?appName=trioford-crm";
}
if (!process.env.JWT_SECRET) {
    process.env.JWT_SECRET = "trioford@123";
}
import app, { connectDB } from "../src/app.mjs";
let isConnected = false;
export default async function handler(req, res) {
    try {
        if (!isConnected) {
            await connectDB();
            isConnected = true;
        }
        return app(req, res);
    }
    catch (error) {
        console.error("Vercel Serverless Function Error:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            details: error?.message || String(error)
        });
    }
}
