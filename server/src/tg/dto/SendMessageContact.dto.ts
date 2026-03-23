import {IsString} from "class-validator";

export class SendMessageContactDto {
    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    message: string;
}