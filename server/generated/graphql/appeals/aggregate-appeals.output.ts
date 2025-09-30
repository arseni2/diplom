import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppealsCountAggregate } from './appeals-count-aggregate.output';
import { AppealsAvgAggregate } from './appeals-avg-aggregate.output';
import { AppealsSumAggregate } from './appeals-sum-aggregate.output';
import { AppealsMinAggregate } from './appeals-min-aggregate.output';
import { AppealsMaxAggregate } from './appeals-max-aggregate.output';

@ObjectType()
export class AggregateAppeals {

    @Field(() => AppealsCountAggregate, {nullable:true})
    _count?: AppealsCountAggregate;

    @Field(() => AppealsAvgAggregate, {nullable:true})
    _avg?: AppealsAvgAggregate;

    @Field(() => AppealsSumAggregate, {nullable:true})
    _sum?: AppealsSumAggregate;

    @Field(() => AppealsMinAggregate, {nullable:true})
    _min?: AppealsMinAggregate;

    @Field(() => AppealsMaxAggregate, {nullable:true})
    _max?: AppealsMaxAggregate;
}
