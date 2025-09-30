import {HttpException, HttpStatus} from "@nestjs/common";

export class AppException extends HttpException {

    constructor(errors: Record<string, string[]>, statusCode: HttpStatus) {
        super({errors}, statusCode);
    }
}