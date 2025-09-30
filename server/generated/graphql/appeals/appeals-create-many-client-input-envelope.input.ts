import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateManyClientInput } from './appeals-create-many-client.input';
import { Type } from 'class-transformer';

@InputType()
export class AppealsCreateManyClientInputEnvelope {

    @Field(() => [AppealsCreateManyClientInput], {nullable:false})
    @Type(() => AppealsCreateManyClientInput)
    data!: Array<AppealsCreateManyClientInput>;
}
