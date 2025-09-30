import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {UserService} from '../services/user.service';
import {User} from "../../../generated/graphql/user/user.model";
import {UserCreateInput} from "../../../generated/graphql/user/user-create.input";
import {UserUpdateInput} from "../../../generated/graphql/user/user-update.input";
import {AuthGuard} from "../../auth/guards/Auth.guard";
import {UseGuards} from "@nestjs/common";
import {GetUserDecorator} from "../../auth/decorators/GetUser.decorator";
import {type IPayload} from "../../auth/interfaces/payload.interface";


@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {
    }

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
        return this.userService.create(createUserInput);
    }

    @Query(() => User, {name: 'user'})
    findOne(@Args('id', {type: () => Int}) id: number) {
        return this.userService.findOne(id);
    }

    @Query(() => [User], {name: 'users'})
    @UseGuards(AuthGuard)
    findAll(@GetUserDecorator() user: IPayload) {
        return this.userService.findAll(user);
    }

    @Mutation(() => User)
    @UseGuards(AuthGuard)
    updateUser(
        @GetUserDecorator() user: IPayload,
        @Args('data') data: UserUpdateInput
    ) {
        return this.userService.update(user, data);
    }

    @Mutation(() => User)
    @UseGuards(AuthGuard)
    updateAnyUser(
        @GetUserDecorator() user: IPayload,
        @Args('data') data: UserUpdateInput,
        @Args('id') id: number
    ) {
        return this.userService.updateAnyUser(user, id, data);
    }

    @Mutation(() => User)
    @UseGuards(AuthGuard)
    removeUser(@GetUserDecorator() user: IPayload) {
        return this.userService.remove(user.id);
    }

    @Mutation(() => User)
    @UseGuards(AuthGuard)
    removeAnyUser(@GetUserDecorator() user: IPayload, @Args('id') id: number) {
        return this.userService.removeAnyUser(user, id);
    }
}
