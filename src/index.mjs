import AppConfig from "./configs/app.mjs";
import express from "express";
import MongooseService from "./lib/dbClient.mjs";
import cors from "cors";
import corsConfig from "./configs/cors.mjs";
import modules from "./routes/main.mjs";
const { PREFIX } = AppConfig;
// Create the express app
const app = express();
// Middleware
app.use(cors(corsConfig)); // configure cors config file as per requirement
app.use(express.json());
// Health check endpoint
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello, .mts files with Node.js and TypeScript!",
    });
});
// Map all app routes (v1)
modules.forEach((module) => {
    const modulePath = `${PREFIX.V1}${module.path}`;
    module.routes.forEach((route) => {
        const path = `${modulePath}${route.path}`;
        console.log(`Registering: [${module.name}] -> ${path}`);
        app.use(path, route.router);
    });
});
export async function connectDB() {
    const mongooseService = MongooseService.getInstance();
    await mongooseService.connect();
    console.log("Database connected successfully!");
}
export async function disconnectDB() {
    const mongooseService = MongooseService.getInstance();
    await mongooseService.disconnect();
}
export default app;
