import dotenv from "dotenv";
const envFile = `.env.${process.env.NODE_ENV || "local"}`;
if (!envFile) {
    throw new Error("Environment file is not set.");
}
dotenv.config({
    path: envFile,
});
import app, { connectDB, disconnectDB } from "./src/app.mjs";
import AppConfig from "./src/configs/app.mjs";
const { PORT, NETWORK } = AppConfig;
(async () => {
    try {
        // Connect to the database
        await connectDB();
        // Start the server
        app.listen(PORT, NETWORK, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
        // Handle graceful shutdown
        process.on("SIGINT", async () => {
            console.log("Gracefully shutting down...");
            await disconnectDB();
            process.exit(0);
        });
        process.on("SIGTERM", async () => {
            console.log("Process terminated.");
            await disconnectDB();
            process.exit(0);
        });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
