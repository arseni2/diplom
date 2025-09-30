import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseScalarWhereInput } from './house-scalar-where.input';
import { Type } from 'class-transformer';
import { HouseUpdateManyMutationInput } from './house-update-many-mutation.input';

@InputType()
export class HouseUpdateManyWithWhereWithoutRealtorInput {

    @Field(() => HouseScalarWhereInput, {nullable:false})
    @Type(() => HouseScalarWhereInput)
    where!: HouseScalarWhereInput;

    @Field(() => HouseUpdateManyMutationInput, {nullable:false})
    @Type(() => HouseUpdateManyMutationInput)
    data!: HouseUpdateManyMutationInput;
}
