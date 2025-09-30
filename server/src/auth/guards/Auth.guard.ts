import {ExecutionContext, HttpStatus, Injectable,} from '@nestjs/common';
import {GqlExecutionContext} from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import {AppException} from 'src/common/exceptions/App.exception';

@Injectable()
export class AuthGuard {
    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context);
        const req = ctx.getContext().req;

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new AppException({auth: ["не авторизован"]}, HttpStatus.UNAUTHORIZED);

        }

        if (!authHeader.startsWith('Bearer ')) {
            throw new AppException({auth: ["не авторизован"]}, HttpStatus.UNAUTHORIZED);
        }

        const token = authHeader.split(' ')[1];

        try {
            const payload = jwt.verify(
                token,
                "123",
            ) as any;

            req.user = {
                id: payload.id,
                email: payload.email,
            };

            return true;
        } catch (err) {
            throw new AppException({auth: ["не авторизован"]}, HttpStatus.UNAUTHORIZED);
        }
    }
}