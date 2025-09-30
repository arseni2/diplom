import {HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from "../../common/services/prisma.service";
import {IPayload} from "../../auth/interfaces/payload.interface";
import {UserService} from "../../user/services/user.service";
import {RoleEnum} from "../../auth/enums/role.enum";
import {AppException} from "../../common/exceptions/App.exception";
import {HouseCreateDto} from "../dto/HouseCreate.dto";

@Injectable()
export class HousesService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) {
    }

    async create(userPayload: IPayload, dto: HouseCreateDto) {
        const user = await this.userService.findOne(userPayload.id)
        if (user?.roleId == RoleEnum.USER) {
            throw new AppException({user: ["нет прав для пользователя"]}, HttpStatus.FORBIDDEN);
        }

        return this.prisma.house.create({
            data: {
                ...dto,
                realtor: {
                    connect: {
                        id: user?.id
                    }
                }
            }
        })
    }

    findRent() {
        return this.prisma.house.findMany({
            where: {
                isRent: true
            },
            include: {
                images: true
            }
        })
    }

    findSell() {
        return this.prisma.house.findMany({
            where: {
                isSell: true
            },
            include: {
                images: true
            }
        })
    }

    findOne(id: number) {
        return this.prisma.house.findUnique({
            where: {id},
            include: {
                images: true,
                realtor: true,
                features: true
            }
        })
    }

    async findAll(user: IPayload) {
        const userFromDb = await this.userService.findOne(user.id)

        if (userFromDb?.roleId === RoleEnum.ADMIN) {
            return this.prisma.house.findMany({})
        }
        if (userFromDb?.roleId === RoleEnum.REALTOR) {
            return this.prisma.house.findMany({
                where: {
                    realtorId: userFromDb?.id
                },
                include: {
                    realtor: true
                }
            })
        }
    }

    async remove(user: IPayload, id: number) {
        const dbUser = await this.userService.findOne(user.id)
        if(dbUser?.roleId == RoleEnum.USER) {
            throw new AppException({"user": ["нет прав"]}, HttpStatus.FORBIDDEN);
        }
        return this.prisma.house.delete({
            where: {id}
        });
    }
}
