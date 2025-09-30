import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {AuthService} from '../services/auth.service';
import {AuthSuccessDto} from "../dto/AuthSuccess.dto";
import {UserCreateInput} from "../../../generated/graphql/user/user-create.input";
import {UseGuards} from '@nestjs/common';
import {AuthGuard} from "../guards/Auth.guard";
import {User} from 'generated/graphql/user/user.model';
import {GetUserDecorator} from "../decorators/GetUser.decorator";
import {type IPayload} from "../interfaces/payload.interface";

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ) {
    }

    @Mutation(() => AuthSuccessDto)
    signIn(
        @Args('createUserInput') createUserInput: UserCreateInput
    ) {
        return this.authService.signIn(createUserInput)
    }

    @Mutation(() => AuthSuccessDto)
    signUp(
        @Args('createUserInput') createUserInput: UserCreateInput
    ) {
        return this.authService.signUp(createUserInput)
    }

    @Query(() => User)
    @UseGuards(AuthGuard)
    me(@GetUserDecorator() payload: IPayload) {
        return this.authService.me(payload)
    }
}
