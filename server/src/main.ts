import { config } from "dotenv";
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path'; 
import compression from "compression";
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); 
  
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.use(bodyParser.json({ limit: '50mb' })); 
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  
  app.use(compression());
  
  app.useStaticAssets(join(process.cwd(), 'static', 'uploads'), {
    prefix: '/uploads/', 
  });

  await app.listen(10000, '0.0.0.0');
}
bootstrap();