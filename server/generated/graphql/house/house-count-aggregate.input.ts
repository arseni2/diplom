import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HouseCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    square?: true;

    @Field(() => Boolean, {nullable:true})
    remont?: true;

    @Field(() => Boolean, {nullable:true})
    floor?: true;

    @Field(() => Boolean, {nullable:true})
    rooms?: true;

    @Field(() => Boolean, {nullable:true})
    bio?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    isRent?: true;

    @Field(() => Boolean, {nullable:true})
    isSell?: true;

    @Field(() => Boolean, {nullable:true})
    realtorId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
