import { Module } from '@nestjs/common';
import { TgService } from './service/tg.service';
import { TgController } from './controller/tg.controller';

@Module({
  providers: [TgService],
  controllers: [TgController]
})
export class TgModule {}
