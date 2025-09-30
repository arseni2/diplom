import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';

@InputType()
export class FileNullableScalarRelationFilter {

    @Field(() => FileWhereInput, {nullable:true})
    is?: FileWhereInput;

    @Field(() => FileWhereInput, {nullable:true})
    isNot?: FileWhereInput;
}
