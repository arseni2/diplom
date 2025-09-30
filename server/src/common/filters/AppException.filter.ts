import {ArgumentsHost, Catch} from '@nestjs/common';
import {GqlExceptionFilter} from '@nestjs/graphql';
import {GraphQLError} from 'graphql';
import {AppException} from "../exceptions/App.exception"


@Catch(AppException)
export class AppExceptionFilter implements GqlExceptionFilter {
    catch(exception: AppException, host: ArgumentsHost) {
        const response = exception.getResponse() as any;
        const statusCode = exception.getStatus();
        //@ts-ignore
        return new GraphQLError("Error", {
            extensions: {
                errors: response.errors,
                statusCode
            },
        })
    }
}