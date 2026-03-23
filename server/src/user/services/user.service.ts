import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma.service';
import { UserCreateInput } from '../../../generated/graphql/user/user-create.input';
import { UserUpdateInput } from '../../../generated/graphql/user/user-update.input';
import { type IPayload } from '../../auth/interfaces/payload.interface';
import { RoleEnum } from '../../auth/enums/role.enum';
import { AppException } from '../../common/exceptions/App.exception';
import argon2 from 'argon2';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async save(user: User) {
    const { 
      id, 
      roleId,      
      avatarId,         
      createdAt,   
      ...data 
    } = user;
  
    const updateData: any = { ...data };
  
    if (user.roleId) {
      updateData.role = { connect: { id: user.roleId } };
    }
  
    if (user.avatarId) {
      updateData.avatar = { connect: { id: user.avatarId } };
    }
  
    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }
  async findUserByToken(token: string) {
    return this.prisma.user.findFirst({
      where: { token }
    });
  }

  async create(dto: UserCreateInput) {
    dto.role = { connect: { id: 1 } };
    dto.password = await argon2.hash(dto.password);
    return this.prisma.user.create({
      data: dto,
    });
  } //T1est@test.ru

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { role: true, avatar: true },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });
  }

  update(user: IPayload, dto: UserUpdateInput) {
    if (!dto.avatar?.connect?.id) {
      dto.avatar = undefined;
    }
    return this.prisma.user.update({
      where: { id: user.id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async findAll(user: IPayload) {
    const dbUser = await this.findOne(user.id);
    if (dbUser?.roleId != RoleEnum.ADMIN) {
      throw new AppException({ user: ['нет прав'] }, HttpStatus.FORBIDDEN);
    }

    return this.prisma.user.findMany({
      include: {
        role: true,
        houses: true,
        avatar: true,
      },
    });
  }

  async updateAnyUser(user: IPayload, id: number, dto: UserUpdateInput) {
    const dbUser = await this.findOne(user.id);
    if (dbUser?.roleId != RoleEnum.ADMIN) {
      throw new AppException({ user: ['нет прав'] }, HttpStatus.FORBIDDEN);
    }

    return this.prisma.user.update({
      where: { id },
      include: { role: true, houses: true },
      data: dto,
    });
  }

  async removeAnyUser(user: IPayload, id: number) {
    const dbUser = await this.findOne(user.id);
    if (dbUser?.roleId != RoleEnum.ADMIN) {
      throw new AppException({ user: ['нет прав'] }, HttpStatus.FORBIDDEN);
    }

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
