import {Module} from '@nestjs/common';
import {FeaturesService} from './services/features.service';
import {FeaturesResolver} from './controllers/features.resolver';
import {PrismaService} from "../common/services/prisma.service";
import {UserModule} from "../user/user.module";

@Module({
    imports: [UserModule],
    providers: [FeaturesResolver, FeaturesService, PrismaService],
})
export class FeaturesModule {
}
