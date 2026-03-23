import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../../common/services/prisma.service';
import { RoleEnum } from '../../auth/enums/role.enum';
import {HttpStatus} from "@nestjs/common";
import {AppException} from "../../common/exceptions/App.exception";
import {IPayload} from "../../auth/interfaces/payload.interface";


const mockPrismaService = {
  user: {
    findUnique: jest.fn(),
    delete: jest.fn(),
    deleteAny: jest.fn(),
  },
};

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    it('should return a user with role and avatar when user exists', async () => {
      const mockUser = {
        id: 1,
        email: 'test@example.com',
        firstname: 'John',
        lastname: 'Doe',
        roleId: RoleEnum.USER,
        avatarId: 1,
        role: { id: '1', title: 'User' },
        avatar: { id: '1', path: '/avatar.jpg' },
      };

      (mockPrismaService.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

      const result = await service.findOne(1);

      expect(result).toEqual(mockUser);
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: { role: true, avatar: true },
      });
    });

    it('should return null when user does not exist', async () => {
      (mockPrismaService.user.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await service.findOne(999);

      expect(result).toBeNull();
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 999 },
        include: { role: true, avatar: true },
      });
    });
  });
  describe('remove', () => {
    it('should delete a user and return the deleted user data', async () => {
      const mockDeletedUser = {
        id: 1,
        email: 'deleted@example.com',
        firstname: 'Deleted',
        lastname: 'User',
        roleId: 1,
        avatarId: null,
      };

      (mockPrismaService.user.delete as jest.Mock).mockResolvedValue(mockDeletedUser);

      const result = await service.remove(1);

      expect(result).toEqual(mockDeletedUser);
      expect(mockPrismaService.user.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw an error if user does not exist', async () => {
      const errorMessage = 'Record to delete does not exist.';
      (mockPrismaService.user.delete as jest.Mock).mockRejectedValue(
          new Error(errorMessage)
      );

      await expect(service.remove(999)).rejects.toThrow(errorMessage);
      expect(mockPrismaService.user.delete).toHaveBeenCalledWith({
        where: { id: 999 },
      });
    });
  });

  it('should throw AppException if current user is not admin', async () => {
    const mockNonAdminPayload: IPayload = { id: 2, email: "user@user.com" };

    jest.spyOn(service, 'findOne').mockResolvedValueOnce({
      id: 2,
      roleId: RoleEnum.USER,
      email: 'user@example.com',
    } as any);

    await expect(service.removeAnyUser(mockNonAdminPayload, 3))
        .rejects
        .toThrow(AppException);

    try {
      await service.removeAnyUser(mockNonAdminPayload, 3);
    } catch (error) {
      expect(error).toBeInstanceOf(AppException);
      // Исправлено: добавлен ключ "errors"
      expect(error.getResponse()).toEqual({
        errors: { user: ['нет прав'] }
      });
      expect(error.getStatus()).toBe(HttpStatus.FORBIDDEN);
    }

    expect(service.findOne).toHaveBeenCalledWith(mockNonAdminPayload.id);
    expect(mockPrismaService.user.delete).not.toHaveBeenCalled();
  });
});