import { IsString, IsOptional } from 'class-validator';

export class SendMessageDto {
    @IsString()
    fullName: string;

    @IsString()
    email: string;

    @IsString()
    telegram: string;

    @IsString()
    phone: string;
}