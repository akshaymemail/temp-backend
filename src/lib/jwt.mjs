import JWT from "jsonwebtoken";
import HttpResponse from "../utils/response.mjs";
import JWTConfig from "../configs/jwt.mjs";
import MESSAGES from "../intl/main.mjs";
const { ERROR } = MESSAGES;
class JWTService {
    static signToken(payload) {
        const token = JWT.sign(payload, JWTConfig.SECRET, {
            expiresIn: JWTConfig.EXPIRES_IN,
        });
        return token;
    }
    static verifyToken(token) {
        try {
            const decoded = JWT.verify(token, JWTConfig.SECRET);
            return decoded;
        }
        catch (error) {
            return null; // Return null if the token is invalid or expired
        }
    }
    static isAuth(req, res, next) {
        const authReq = req;
        const authHeader = req.headers.authorization;
        // 1. Authorization header check
        if (!authHeader) {
            return HttpResponse.unauthorized(res, ERROR.NO_TOKEN_PROVIDED);
        }
        // 2. Validate Bearer scheme
        const parts = authHeader.trim().split(" ");
        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return HttpResponse.unauthorized(res, ERROR.INVALID_TOKEN_PROVIDED);
        }
        const token = parts[1];
        if (!token) {
            return HttpResponse.unauthorized(res, ERROR.INVALID_TOKEN_PROVIDED);
        }
        // 3. Verify token
        try {
            const user = JWTService.verifyToken(token);
            if (!user) {
                return HttpResponse.unauthorized(res, ERROR.INVALID_OR_EXPIRED_TOKEN);
            }
            // 4. Attach user to request
            authReq.user = user;
            return next();
        }
        catch (error) {
            // 5. Expected JWT errors (expired, malformed, etc.)
            if (error?.name === "TokenExpiredError" ||
                error?.name === "JsonWebTokenError") {
                return HttpResponse.unauthorized(res, ERROR.INVALID_OR_EXPIRED_TOKEN);
            }
            // 6. Unexpected errors
            console.error("Auth middleware error:", error);
            return HttpResponse.internalServerError(res, ERROR.INTERNAL_SERVER_ERROR);
        }
    }
}
export default JWTService;
