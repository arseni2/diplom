import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class SetPasswordDto {
    @Field(() => String, {nullable:false})
    token: string;

    @Field(() => String, {nullable:false})
    newPassword: string;
}