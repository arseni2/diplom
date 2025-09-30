import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {AppealService} from '../services/appeal.service';
import {AuthGuard} from "../../auth/guards/Auth.guard";
import {UseGuards} from "@nestjs/common";
import {AppealsCreateInput} from "../../../generated/graphql/appeals/appeals-create.input";
import {GetUserDecorator} from "../../auth/decorators/GetUser.decorator";
import {type IPayload} from "../../auth/interfaces/payload.interface";
import {Appeals} from "../../../generated/graphql/appeals/appeals.model";
import {AppealsUpdateInput} from "../../../generated/graphql/appeals/appeals-update.input";

@Resolver(() => Appeals)
export class AppealResolver {
    constructor(private readonly appealService: AppealService) {
    }

    @Mutation(() => Appeals)
    @UseGuards(AuthGuard)
    createAppeal(@GetUserDecorator() user: IPayload, @Args('createAppealInput') createAppealInput: AppealsCreateInput) {
        return this.appealService.create(user, createAppealInput);
    }

    @Query(() => [Appeals], {name: 'appeals'})
    @UseGuards(AuthGuard)
    findAll(@GetUserDecorator() user: IPayload) {
        return this.appealService.findAll(user);
    }

    @Query(() => Appeals, {name: 'appeal'})
    @UseGuards(AuthGuard)
    findOne(@Args('id', {type: () => Int}) id: number) {
        return this.appealService.findOne(id);
    }

    @Mutation(() => Appeals)
    @UseGuards(AuthGuard)
    updateAppeal(
        @Args('id', {type: () => Int}) id: number,
        @Args('updateAppealInput') updateAppealInput: AppealsUpdateInput,
        @GetUserDecorator() user: IPayload
    ) {
      return this.appealService.update(id, updateAppealInput, user);
    }

    @Mutation(() => Appeals)
    @UseGuards(AuthGuard)
    removeAppeal(@GetUserDecorator() user: IPayload, @Args('id', {type: () => Int}) id: number) {
        return this.appealService.remove(user, id);
    }
}
