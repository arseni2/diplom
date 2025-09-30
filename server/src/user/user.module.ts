import {Module} from '@nestjs/common';
import {UserService} from './services/user.service';
import {UserResolver} from './controllers/user.resolver';
import {PrismaService} from "../common/services/prisma.service";

@Module({
    providers: [UserResolver, UserService, PrismaService],
    exports: [UserService],
})
export class UserModule {
}
