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
            },
            include: {
                realtor: true
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
            return this.prisma.house.findMany({
                include: {
                    images: true,
                }
            })
        }
        if (userFromDb?.roleId === RoleEnum.REALTOR) {
            return this.prisma.house.findMany({
                where: {
                    realtorId: userFromDb?.id
                },
                include: {
                    realtor: true,
                    images: true
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

    async findAllByRealtorId(id: number) {
        const dbUser = await this.userService.findOne(id)
        if(!dbUser) {
            throw new AppException({user: ["not found"]}, HttpStatus.BAD_REQUEST);
        }

        return this.prisma.house.findMany({
            where: {
                realtorId: dbUser.id
            },
            include: {
                images: true,
                features: true
            }
        })
    }

    housesFilter(
        address?: string,
        minPrice?: number,
        maxPrice?: number,
        isRent?: boolean // nullable
    ) {
        const where: any = {};

        if (address) {
            where.address = { contains: address };
        }

        if (minPrice !== undefined || maxPrice !== undefined) {
            where.price = {};
            if (minPrice !== undefined) where.price.gte = minPrice;
            if (maxPrice !== undefined) where.price.lte = maxPrice;
        }

        if (isRent === true) {
            where.isRent = true;
        } else {
            where.isSell = true;
        }

        return this.prisma.house.findMany({
            where,
            include: {
                images: true,
                realtor: true,
                features: true,
            }
        });
    }
}
