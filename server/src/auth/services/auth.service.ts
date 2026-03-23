import { BadRequestException, Injectable } from '@nestjs/common';
import { UserCreateInput } from '../../../generated/graphql/user/user-create.input';
import { UserService } from '../../user/services/user.service';
import { AppException } from '../../common/exceptions/App.exception';
import { JwtService } from '@nestjs/jwt';
import { AuthSuccessDto } from '../dto/AuthSuccess.dto';
import { User } from '../../../generated/graphql/user/user.model';
import { IPayload } from '../interfaces/payload.interface';
import argon2 from 'argon2';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailerService
  ) {}

  private async generateToken(id: number, email: string) {
    const payload = { id, email };
    return await this.jwtService.signAsync(payload);
  }

  async forgotPassword(email: string): Promise<AuthSuccessDto> {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new AppException({ user: ['не найден'] }, 400);

    const token = Date.now();
    //@ts-ignore
    user.token = String(token);

    const frontendUrl = process.env.FRONTEND_URL;
    const resetLink = `${frontendUrl}/auth/forgot/${token}/`;

    await this.mailService.sendMail({
      to: user.email,
      subject: 'Сброс пароля',
      template: 'reset-password',
      context: { resetLink },
    });

    const updatedUser = await this.userService.save(user);
    return {
      ...updatedUser,
      token: await this.generateToken(user.id, user.email),
    };
  }

  async updatePassword(token: string, password: string): Promise<AuthSuccessDto> {
    const user = await this.userService.findUserByToken(token);
    if (!user) throw new AppException({ user: ['не найден'] }, 400);
    user.password = await argon2.hash(password);
    const updatedUser = await this.userService.save(user);
    return {
      ...updatedUser,
      token: await this.generateToken(user.id, user.email),
    };
  }

  async signIn(dto: UserCreateInput): Promise<AuthSuccessDto> {
    const user = await this.userService.findByEmail(dto.email);

    if (!user) {
      throw new AppException({ user: ['не найден'] }, 400);
    }
    const validPass = await argon2.verify(user.password, dto.password);
    console.log(await argon2.hash(dto.password));
    if (!validPass) {
      throw new AppException({ user: ['не правильный email или пароль'] }, 401);
    }

    return {
      ...user,
      token: await this.generateToken(user.id, user.email),
    };
  }

  async signUp(dto: UserCreateInput): Promise<AuthSuccessDto> {
    const user = await this.userService.create(dto);

    return {
      ...user,
      token: await this.generateToken(user.id, user.email),
    };
  }

  async me(user: IPayload): Promise<User | null> {
    return this.userService.findOne(user.id);
  }
}
