import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileCreateInput } from './file-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFileArgs {

    @Field(() => FileCreateInput, {nullable:false})
    @Type(() => FileCreateInput)
    data!: FileCreateInput;
}
