module.exports = {
    RESPONSE_MESSAGES: {
        SUCCESS: "SUCCESS",
        BAD_REQUEST: "Bad Request",
        VALIDATION_ERROR: "Validation Error",
        MISSING_PARAMS: "Missing Parameters",
        NOT_AUTHORIZED: "Not Authorized",
        FAILURE: "Request Failed",
        NOT_FOUND: "Not Found",
    },

    HTTP_METHODS: Object.freeze({
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
        PATCH: "PATCH",
        DELETE: "DELETE",
    }),

    JWT_TOKEN_KEYS: Object.freeze({
        PREFERRED_USERNAME: "preferred_username",
    }),

    HTTP_STATUS_CODES: Object.freeze({
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,
        PARTIAL_CONTENT: 206,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
    }),

    // Add other constant categories as needed
};
