import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class UploadDto {
    @Field(type => String)
    url: string;

    @Field(type => Int)
    id: number;
}