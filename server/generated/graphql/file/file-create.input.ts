import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HouseCreateNestedOneWithoutImagesInput } from '../house/house-create-nested-one-without-images.input';
import { UserCreateNestedOneWithoutAvatarInput } from '../user/user-create-nested-one-without-avatar.input';

@InputType()
export class FileCreateInput {

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => HouseCreateNestedOneWithoutImagesInput, {nullable:true})
    house?: HouseCreateNestedOneWithoutImagesInput;

    @Field(() => UserCreateNestedOneWithoutAvatarInput, {nullable:true})
    user?: UserCreateNestedOneWithoutAvatarInput;
}
