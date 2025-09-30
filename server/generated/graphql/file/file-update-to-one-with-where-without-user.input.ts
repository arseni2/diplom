import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutUserInput } from './file-update-without-user.input';

@InputType()
export class FileUpdateToOneWithWhereWithoutUserInput {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;

    @Field(() => FileUpdateWithoutUserInput, {nullable:false})
    @Type(() => FileUpdateWithoutUserInput)
    data!: FileUpdateWithoutUserInput;
}
