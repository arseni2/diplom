import {Module} from '@nestjs/common';
import {AppealService} from './services/appeal.service';
import {AppealResolver} from './controllers/appeal.resolver';
import {PrismaService} from "../common/services/prisma.service";
import {UserModule} from "../user/user.module";

@Module({
    imports: [UserModule],
    providers: [AppealResolver, AppealService, PrismaService],
})
export class AppealModule {
}
