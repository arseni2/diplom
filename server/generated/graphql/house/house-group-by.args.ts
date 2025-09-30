import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';
import { Type } from 'class-transformer';
import { HouseOrderByWithAggregationInput } from './house-order-by-with-aggregation.input';
import { HouseScalarFieldEnum } from './house-scalar-field.enum';
import { HouseScalarWhereWithAggregatesInput } from './house-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HouseCountAggregateInput } from './house-count-aggregate.input';
import { HouseAvgAggregateInput } from './house-avg-aggregate.input';
import { HouseSumAggregateInput } from './house-sum-aggregate.input';
import { HouseMinAggregateInput } from './house-min-aggregate.input';
import { HouseMaxAggregateInput } from './house-max-aggregate.input';

@ArgsType()
export class HouseGroupByArgs {

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => [HouseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HouseOrderByWithAggregationInput>;

    @Field(() => [HouseScalarFieldEnum], {nullable:false})
    by!: Array<`${HouseScalarFieldEnum}`>;

    @Field(() => HouseScalarWhereWithAggregatesInput, {nullable:true})
    having?: HouseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HouseCountAggregateInput, {nullable:true})
    _count?: HouseCountAggregateInput;

    @Field(() => HouseAvgAggregateInput, {nullable:true})
    _avg?: HouseAvgAggregateInput;

    @Field(() => HouseSumAggregateInput, {nullable:true})
    _sum?: HouseSumAggregateInput;

    @Field(() => HouseMinAggregateInput, {nullable:true})
    _min?: HouseMinAggregateInput;

    @Field(() => HouseMaxAggregateInput, {nullable:true})
    _max?: HouseMaxAggregateInput;
}
