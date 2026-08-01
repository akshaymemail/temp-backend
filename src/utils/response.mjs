import logger from "../lib/logger.mjs"; // Import the logger
import MESSAGES from "../intl/main.mjs";
const { ERROR, SUCCESS } = MESSAGES;
// Utility class for handling HTTP responses
class HttpResponse {
    static isProduction = process.env.NODE_ENV === "production";
    // Private method for error handling
    static error(res, statusCode, message, details) {
        const responseDetails = this.isProduction ? undefined : details;
        // Log the error
        logger.error({ statusCode, message, details });
        // Send error response
        const errorResponse = {
            success: false,
            error: {
                message,
                details: responseDetails,
            },
        };
        res.status(statusCode).json(errorResponse);
    }
    // Private method for success handling
    static success(res, statusCode, data, message) {
        const successResponse = {
            success: true,
            message,
            data,
        };
        res.status(statusCode).json(successResponse);
    }
    // Public helper for success responses
    static ok(res, data, message = SUCCESS.OPERATION_SUCCESS) {
        this.success(res, 200, data, message);
    }
    static created(res, data, message = SUCCESS.REQUEST_CREATED) {
        this.success(res, 201, data, message);
    }
    // Public helpers for common error status codes
    static badRequest(res, message = ERROR.BAD_REQUEST, details) {
        this.error(res, 400, message, details);
    }
    static unauthorized(res, details, message = ERROR.UNAUTHORIZED) {
        this.error(res, 401, message, details);
    }
    static notFound(res, message = ERROR.NOT_FOUND, details) {
        this.error(res, 404, message, details);
    }
    static internalServerError(res, details, message = ERROR.INTERNAL_SERVER_ERROR) {
        this.error(res, 500, message, details);
    }
    // Public helper for validation errors
    static validationError(res, errors) {
        this.error(res, 422, "Validation Failed", errors);
    }
}
export default HttpResponse;
