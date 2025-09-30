import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileScalarWhereInput } from './file-scalar-where.input';
import { Type } from 'class-transformer';
import { FileUpdateManyMutationInput } from './file-update-many-mutation.input';

@InputType()
export class FileUpdateManyWithWhereWithoutHouseInput {

    @Field(() => FileScalarWhereInput, {nullable:false})
    @Type(() => FileScalarWhereInput)
    where!: FileScalarWhereInput;

    @Field(() => FileUpdateManyMutationInput, {nullable:false})
    @Type(() => FileUpdateManyMutationInput)
    data!: FileUpdateManyMutationInput;
}
