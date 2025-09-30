import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutUserInput } from './file-update-without-user.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutUserInput } from './file-create-without-user.input';
import { FileWhereInput } from './file-where.input';

@InputType()
export class FileUpsertWithoutUserInput {

    @Field(() => FileUpdateWithoutUserInput, {nullable:false})
    @Type(() => FileUpdateWithoutUserInput)
    update!: FileUpdateWithoutUserInput;

    @Field(() => FileCreateWithoutUserInput, {nullable:false})
    @Type(() => FileCreateWithoutUserInput)
    create!: FileCreateWithoutUserInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;
}
