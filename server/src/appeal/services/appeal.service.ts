import {HttpStatus, Injectable} from '@nestjs/common';
import {AppealsCreateInput} from "../../../generated/graphql/appeals/appeals-create.input";
import {IPayload} from "../../auth/interfaces/payload.interface";
import {PrismaService} from "../../common/services/prisma.service";
import {UserService} from "../../user/services/user.service";
import {RoleEnum} from "../../auth/enums/role.enum";
import {AppealsUpdateInput} from "../../../generated/graphql/appeals/appeals-update.input";
import {AppException} from "../../common/exceptions/App.exception";

@Injectable()
export class AppealService {
    constructor(
        private prismaService: PrismaService,
        private userService: UserService
    ) {
    }

    async create(user: IPayload, dto: AppealsCreateInput) {
        return this.prismaService.appeals.create({
            data: {
                ...dto,
                client: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });
    }

    async findAll(user: IPayload) {
        const userFromDb = await this.userService.findOne(user.id);
        if (userFromDb?.roleId === RoleEnum.ADMIN) {
            return this.prismaService.appeals.findMany({
                include: {
                    house: true,
                    client: true,
                    realtor: true,
                }
            })
        }

        if (userFromDb?.roleId === RoleEnum.ADMIN) {
            return this.prismaService.appeals.findMany({
                where: {
                    realtorId: userFromDb?.id
                },
                include: {
                    house: true,
                    client: true,
                    realtor: true,
                },
            });
        }

        return this.prismaService.appeals.findMany({
            where: {
                clientId: userFromDb?.id
            },
            include: {
                house: true,
                client: true,
                realtor: true,
            },
        })
    }

    async findOne(id: number) {
        return this.prismaService.appeals.findUnique({
            where: {
                id
            },
            include: {
                house: true,
                client: true,
                realtor: true,
            }
        })
    }

    async update(id: number, dto: AppealsUpdateInput, user: IPayload) {
        const userFormDb = await this.userService.findOne(user.id);
        if (userFormDb?.roleId === RoleEnum.ADMIN) {
            return this.prismaService.appeals.update({
                where: {id},
                data: dto,
                include: {
                    house: true,
                    client: true,
                    realtor: true,
                }
            })
        }
        if (userFormDb?.roleId === RoleEnum.REALTOR) {
            try {
                return this.prismaService.appeals.update({
                    where: {
                        realtorId: userFormDb.id,
                        id: id
                    },
                    include: {
                        house: true,
                        client: true,
                        realtor: true,
                    },
                    data: dto
                })
            } catch (error) {
                throw new AppException({user: ["нет прав"]}, HttpStatus.FORBIDDEN)
            }
        }

        throw new AppException({user: ["нет прав"]}, HttpStatus.FORBIDDEN)
    }

    async remove(user: IPayload, id: number) {
        const userFromDb = await this.userService.findOne(user.id);

        if (userFromDb?.roleId === RoleEnum.ADMIN) {
            return this.prismaService.appeals.delete({
                where: {id}
            })
        }

        if (userFromDb?.roleId === RoleEnum.REALTOR) {
            return this.prismaService.appeals.delete({
                where: {id, realtorId: userFromDb?.id},
                include: {
                    realtor: true,
                }
            })
        }

        return this.prismaService.appeals.delete({
            where: {id, clientId: userFromDb?.id},
            include: {
                client: true,
            }
        })
    }
}
