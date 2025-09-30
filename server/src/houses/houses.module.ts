import { Module } from '@nestjs/common';
import { HousesService } from './services/houses.service';
import { HousesResolver } from './controllers/houses.resolver';
import {UserModule} from "../user/user.module";
import {PrismaService} from "../common/services/prisma.service";

@Module({
  imports: [UserModule],
  providers: [HousesResolver, HousesService, PrismaService],
})
export class HousesModule {}
