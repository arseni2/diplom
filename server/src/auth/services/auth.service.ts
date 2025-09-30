import {Injectable} from '@nestjs/common';
import {UserCreateInput} from "../../../generated/graphql/user/user-create.input";
import {UserService} from "../../user/services/user.service";
import {AppException} from "../../common/exceptions/App.exception";
import {JwtService} from "@nestjs/jwt";
import {AuthSuccessDto} from "../dto/AuthSuccess.dto";
import {User} from "../../../generated/graphql/user/user.model";
import {IPayload} from "../interfaces/payload.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {
    }

    private async generateToken(id: number, email: string) {
        const payload = { id, email };
        return await this.jwtService.signAsync(payload)
    }

    async signIn(dto: UserCreateInput): Promise<AuthSuccessDto> {
        const user = await this.userService.findByEmail(dto.email)

        if(!user) {
            throw new AppException({user: ["не найден"]}, 400)
        }

        return {
            ...user,
            token: await this.generateToken(user.id, user.email)
        };
    }

    async signUp(dto: UserCreateInput): Promise<AuthSuccessDto>  {
        const user = await this.userService.create(dto)

        return {
            ...user,
            token: await this.generateToken(user.id, user.email)
        };
    }

    async me(user: IPayload): Promise<User | null> {
        return this.userService.findOne(user.id)
    }
}
