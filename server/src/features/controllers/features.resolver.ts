import {Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import {FeaturesService} from '../services/features.service';
import {Feature} from "../../../generated/graphql/feature/feature.model";
import {FeatureCreateInput} from "../../../generated/graphql/feature/feature-create.input";
import {FeatureUpdateInput} from "../../../generated/graphql/feature/feature-update.input";
import {AuthGuard} from "../../auth/guards/Auth.guard";
import {UseGuards} from "@nestjs/common";
import {GetUserDecorator} from "../../auth/decorators/GetUser.decorator";
import {type IPayload} from "../../auth/interfaces/payload.interface";

@Resolver(() => Feature)
export class FeaturesResolver {
    constructor(private readonly featuresService: FeaturesService) {
    }

    @Mutation(() => Feature)
    @UseGuards(AuthGuard)
    createFeature(@GetUserDecorator() user: IPayload, @Args('createFeatureInput') createFeatureInput: FeatureCreateInput) {
        return this.featuresService.create(user, createFeatureInput);
    }

    @Query(() => [Feature], {name: 'features'})
    findAll() {
        return this.featuresService.findAll();
    }

    @Query(() => [Feature], {name: 'feature'})
    findOne(@Args('title', {type: () => String}) title: string) {
        return this.featuresService.findOneByName(title);
    }

    @Mutation(() => Feature)
    @UseGuards(AuthGuard)
    updateFeature(
        @GetUserDecorator() user: IPayload,
        @Args('id', { type: () => Int }) id: number,
        @Args('updateFeatureInput') updateFeatureInput: FeatureUpdateInput
    ) {
        return this.featuresService.update(user, id, updateFeatureInput);
    }

    @Mutation(() => Feature)
    @UseGuards(AuthGuard)
    removeFeature(@GetUserDecorator() user: IPayload,@Args('id', {type: () => Int}) id: number) {
        return this.featuresService.remove(user, id);
    }
}
