import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealsWhereInput } from './appeals-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAppealsArgs {

    @Field(() => AppealsWhereInput, {nullable:true})
    @Type(() => AppealsWhereInput)
    where?: AppealsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
