declare const app: import("express-serve-static-core").Express;
export declare function connectDB(): Promise<void>;
export declare function disconnectDB(): Promise<void>;
export default app;
