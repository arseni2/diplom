import { registerEnumType } from '@nestjs/graphql';

export enum FeatureScalarFieldEnum {
    id = "id",
    title = "title",
    value = "value",
    houseId = "houseId"
}


registerEnumType(FeatureScalarFieldEnum, { name: 'FeatureScalarFieldEnum', description: undefined })
