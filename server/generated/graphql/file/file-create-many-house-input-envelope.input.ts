import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyHouseInput } from './file-create-many-house.input';
import { Type } from 'class-transformer';

@InputType()
export class FileCreateManyHouseInputEnvelope {

    @Field(() => [FileCreateManyHouseInput], {nullable:false})
    @Type(() => FileCreateManyHouseInput)
    data!: Array<FileCreateManyHouseInput>;
}
