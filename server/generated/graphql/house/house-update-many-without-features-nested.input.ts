import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutFeaturesInput } from './house-create-without-features.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutFeaturesInput } from './house-create-or-connect-without-features.input';
import { HouseUpsertWithWhereUniqueWithoutFeaturesInput } from './house-upsert-with-where-unique-without-features.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { HouseUpdateWithWhereUniqueWithoutFeaturesInput } from './house-update-with-where-unique-without-features.input';
import { HouseUpdateManyWithWhereWithoutFeaturesInput } from './house-update-many-with-where-without-features.input';
import { HouseScalarWhereInput } from './house-scalar-where.input';

@InputType()
export class HouseUpdateManyWithoutFeaturesNestedInput {

    @Field(() => [HouseCreateWithoutFeaturesInput], {nullable:true})
    @Type(() => HouseCreateWithoutFeaturesInput)
    create?: Array<HouseCreateWithoutFeaturesInput>;

    @Field(() => [HouseCreateOrConnectWithoutFeaturesInput], {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutFeaturesInput)
    connectOrCreate?: Array<HouseCreateOrConnectWithoutFeaturesInput>;

    @Field(() => [HouseUpsertWithWhereUniqueWithoutFeaturesInput], {nullable:true})
    @Type(() => HouseUpsertWithWhereUniqueWithoutFeaturesInput)
    upsert?: Array<HouseUpsertWithWhereUniqueWithoutFeaturesInput>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;

    @Field(() => [HouseUpdateWithWhereUniqueWithoutFeaturesInput], {nullable:true})
    @Type(() => HouseUpdateWithWhereUniqueWithoutFeaturesInput)
    update?: Array<HouseUpdateWithWhereUniqueWithoutFeaturesInput>;

    @Field(() => [HouseUpdateManyWithWhereWithoutFeaturesInput], {nullable:true})
    @Type(() => HouseUpdateManyWithWhereWithoutFeaturesInput)
    updateMany?: Array<HouseUpdateManyWithWhereWithoutFeaturesInput>;

    @Field(() => [HouseScalarWhereInput], {nullable:true})
    @Type(() => HouseScalarWhereInput)
    deleteMany?: Array<HouseScalarWhereInput>;
}
