import {HttpStatus, Injectable} from '@nestjs/common';
import {FeatureCreateInput} from "../../../generated/graphql/feature/feature-create.input";
import {FeatureUpdateInput} from "../../../generated/graphql/feature/feature-update.input";
import {PrismaService} from "../../common/services/prisma.service";
import {type IPayload} from "../../auth/interfaces/payload.interface";
import {UserService} from "../../user/services/user.service";
import {RoleEnum} from "../../auth/enums/role.enum";
import {AppException} from "../../common/exceptions/App.exception";

@Injectable()
export class FeaturesService {
    constructor(
        private prismaService: PrismaService,
        private userService: UserService,
    ) {
    }

    async create(user: IPayload, dto: FeatureCreateInput) {
        const dbUser = await this.userService.findOne(user.id);
        if (dbUser?.roleId == RoleEnum.USER) {
            throw new AppException({"user": ["нет прав"]}, HttpStatus.FORBIDDEN);
        }
        return this.prismaService.feature.create({
            data: dto
        })
    }

    findAll() {
        return this.prismaService.feature.findMany();
    }

    findOneByName(title: string) {
        return this.prismaService.feature.findMany({
            where: {
                title: {
                    contains: title
                }
            }
        })
    }

    async update(user: IPayload, id: number, dto: FeatureUpdateInput) {
        const dbUser = await this.userService.findOne(user.id);
        if (dbUser?.roleId == RoleEnum.USER) {
            throw new AppException({"user": ["нет прав"]}, HttpStatus.FORBIDDEN);
        }

        return this.prismaService.feature.update({
            where: {id},
            data: dto
        })
    }

    async remove(user: IPayload, id: number) {
        const dbUser = await this.userService.findOne(user.id);
        if (dbUser?.roleId == RoleEnum.USER) {
            throw new AppException({"user": ["нет прав"]}, HttpStatus.FORBIDDEN);
        }

        return this.prismaService.feature.delete({
            where: {id}
        })
    }
}
