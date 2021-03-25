class GttError extends Error {
    constructor(httpCode, error, customMessage = undefined) {
        super(error.message, error.fileName, error.lineNumber);

        this.httpCode = httpCode;
        this.error = error;
        this.customMessage = customMessage;
    }

    get response() {
        return {
            error: true,
            message: this.customMessage || this.error.message,
        };
    }
}

module.exports = GttError;
