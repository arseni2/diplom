import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealsWhereInput } from './appeals-where.input';
import { Type } from 'class-transformer';
import { AppealsOrderByWithAggregationInput } from './appeals-order-by-with-aggregation.input';
import { AppealsScalarFieldEnum } from './appeals-scalar-field.enum';
import { AppealsScalarWhereWithAggregatesInput } from './appeals-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AppealsCountAggregateInput } from './appeals-count-aggregate.input';
import { AppealsAvgAggregateInput } from './appeals-avg-aggregate.input';
import { AppealsSumAggregateInput } from './appeals-sum-aggregate.input';
import { AppealsMinAggregateInput } from './appeals-min-aggregate.input';
import { AppealsMaxAggregateInput } from './appeals-max-aggregate.input';

@ArgsType()
export class AppealsGroupByArgs {

    @Field(() => AppealsWhereInput, {nullable:true})
    @Type(() => AppealsWhereInput)
    where?: AppealsWhereInput;

    @Field(() => [AppealsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AppealsOrderByWithAggregationInput>;

    @Field(() => [AppealsScalarFieldEnum], {nullable:false})
    by!: Array<`${AppealsScalarFieldEnum}`>;

    @Field(() => AppealsScalarWhereWithAggregatesInput, {nullable:true})
    having?: AppealsScalarWhereWithAggregatesInput;

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
