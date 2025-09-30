import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealsCreateManyInput } from './appeals-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppealsArgs {

    @Field(() => [AppealsCreateManyInput], {nullable:false})
    @Type(() => AppealsCreateManyInput)
    data!: Array<AppealsCreateManyInput>;
}
