import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealsWhereInput } from './appeals-where.input';
import { Type } from 'class-transformer';
import { AppealsOrderByWithRelationInput } from './appeals-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppealsCountAggregateInput } from './appeals-count-aggregate.input';
import { AppealsAvgAggregateInput } from './appeals-avg-aggregate.input';
import { AppealsSumAggregateInput } from './appeals-sum-aggregate.input';
import { AppealsMinAggregateInput } from './appeals-min-aggregate.input';
import { AppealsMaxAggregateInput } from './appeals-max-aggregate.input';

@ArgsType()
export class AppealsAggregateArgs {

    @Field(() => AppealsWhereInput, {nullable:true})
    @Type(() => AppealsWhereInput)
    where?: AppealsWhereInput;

    @Field(() => [AppealsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppealsOrderByWithRelationInput>;

    @Field(() => AppealsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AppealsCountAggregateInput, {nullable:true})
    _count?: AppealsCountAggregateInput;

    @Field(() => AppealsAvgAggregateInput, {nullable:true})
    _avg?: AppealsAvgAggregateInput;

    @Field(() => AppealsSumAggregateInput, {nullable:true})
    _sum?: AppealsSumAggregateInput;

    @Field(() => AppealsMinAggregateInput, {nullable:true})
    _min?: AppealsMinAggregateInput;

    @Field(() => AppealsMaxAggregateInput, {nullable:true})
    _max?: AppealsMaxAggregateInput;
}
