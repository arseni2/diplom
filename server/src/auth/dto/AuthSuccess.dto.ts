import {User} from "../../../generated/graphql/user/user.model";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class AuthSuccessDto extends User {
    @Field(() => String, {nullable:false})
    token: string;
}