import { registerEnumType } from '@nestjs/graphql';

export enum FeatureScalarFieldEnum {
    id = "id",
    title = "title",
    value = "value"
}


registerEnumType(FeatureScalarFieldEnum, { name: 'FeatureScalarFieldEnum', description: undefined })
