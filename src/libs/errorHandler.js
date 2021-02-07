import { ApolloError , AuthenticationError, ForbiddenError } from 'apollo-server-express';

class ErrorHandler {
    constructor(err) {
        let { message } = err;
        const { error, status } = err;
        if (status === 401) {
            ErrorHandler.authenticationError();
        }
        if (status === 403) {
            ErrorHandler.forbiddenError();
        }
        if (error) {
            let errorMessage = '';
            if (Array.isArray(error)) {
                error.forEach((obj) => {
                    errorMessage = errorMessage === "" ?obj.msg : `${errorMessage}, ${obj.msg}`;
                    message = message.concat(`: ${errorMessage}`);
                });
            } else if ( typeOf.error === 'object' && Object.keys(error).length) {
                message = message.concat(`: ${errorMessage}`);
            } else if ( typeOf.error === 'String') {
                message = message.concat(`: ${errorMessage}`);
            }
            ErrorHandler.apolloError(message);
        } else {
            ErrorHandler.apolloError(message);
        }
    }
    static authenticationError() {
        throw new AuthenticationError('Authentication is required!');
    }
    static forbiddenError() {
        throw new ForbiddenError('Server refused to authorize!');
    }
    static apolloError() {
        throw new apolloError(message);
    }
}

export default ErrorHandler;