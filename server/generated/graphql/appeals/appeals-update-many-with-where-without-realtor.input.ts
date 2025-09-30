import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsScalarWhereInput } from './appeals-scalar-where.input';
import { Type } from 'class-transformer';
import { AppealsUpdateManyMutationInput } from './appeals-update-many-mutation.input';

@InputType()
export class AppealsUpdateManyWithWhereWithoutRealtorInput {

    @Field(() => AppealsScalarWhereInput, {nullable:false})
    @Type(() => AppealsScalarWhereInput)
    where!: AppealsScalarWhereInput;

    @Field(() => AppealsUpdateManyMutationInput, {nullable:false})
    @Type(() => AppealsUpdateManyMutationInput)
    data!: AppealsUpdateManyMutationInput;
}
