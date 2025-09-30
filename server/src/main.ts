import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from "compression";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.use(compression())
  await app.listen(process.env.PORT ?? 7777);
}
bootstrap();
