import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class ForgotPasswordDto {
    @Field(() => String, {nullable:false})
    email: string;
}