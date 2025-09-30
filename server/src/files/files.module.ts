import { Module } from '@nestjs/common';
import { FilesService } from './services/files.service';
import { FilesResolver } from './controllers/files.resolver';
import {PrismaService} from "../common/services/prisma.service";

@Module({
  providers: [FilesResolver, FilesService, PrismaService],
})
export class FilesModule {}
