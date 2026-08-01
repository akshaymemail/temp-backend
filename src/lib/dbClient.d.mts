declare class MongooseService {
    private static instance;
    private dbUri;
    private constructor();
    static getInstance(): MongooseService;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    private setupListeners;
}
export default MongooseService;
