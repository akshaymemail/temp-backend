const JWTConfig = {
    EXPIRES_IN: 60 * 60,
    SECRET: process.env.JWT_SECRET || "default",
};
export default JWTConfig;
