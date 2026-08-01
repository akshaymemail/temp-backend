import mongoose from "mongoose";
class MongooseService {
    static instance; // Singleton instance
    dbUri;
    constructor() {
        // Private constructor for Singleton pattern
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI environment variable is not set.");
        }
        this.dbUri = uri;
    }
    // Singleton instance method
    static getInstance() {
        if (!MongooseService.instance) {
            MongooseService.instance = new MongooseService();
        }
        return MongooseService.instance;
    }
    // Connect to the database
    async connect() {
        try {
            await mongoose.connect(this.dbUri, {
                dbName: "trioford-crm",
            });
            console.log("Connected to MongoDB successfully!");
        }
        catch (error) {
            console.error("Error connecting to MongoDB:", error);
            process.exit(1); // Exit process if unable to connect
        }
    }
    // Disconnect from the database
    async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("Disconnected from MongoDB.");
        }
        catch (error) {
            console.error("Error disconnecting from MongoDB:", error);
        }
    }
    // Add event listeners (optional but recommended for monitoring)
    setupListeners() {
        mongoose.connection.on("connected", () => {
            console.log("Mongoose connected to the database.");
        });
        mongoose.connection.on("error", (err) => {
            console.error("Mongoose connection error:", err);
        });
        mongoose.connection.on("disconnected", () => {
            console.log("Mongoose disconnected.");
        });
    }
}
export default MongooseService;
