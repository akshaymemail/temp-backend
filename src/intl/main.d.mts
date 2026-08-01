declare const MESSAGES: {
    ERROR: {
        NO_TOKEN_PROVIDED: string;
        INVALID_OR_EXPIRED_TOKEN: string;
        INVALID_TOKEN_PROVIDED: string;
        INTERNAL_SERVER_ERROR: string;
        UNAUTHORIZED: string;
        BAD_REQUEST: string;
        NOT_FOUND: string;
    };
    USER: {
        USER_ALREADY_EXIST: string;
        USER_NOT_FOUND: string;
        INCORRECT_CREDENTIALS: string;
        REGISTRATION_COMPLETED: string;
        PORFILE_DETAILS_NOT_FOUND: string;
    };
    SUCCESS: {
        OPERATION_SUCCESS: string;
        REQUEST_CREATED: string;
    };
};
export default MESSAGES;
