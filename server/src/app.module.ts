import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/adapters/handlebars.adapter';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { AppealModule } from './appeal/appeal.module';
import { AuthModule } from './auth/auth.module';
import { AppExceptionFilter } from './common/filters/AppException.filter';
import { FeaturesModule } from './features/features.module';
import { FilesModule } from './files/files.module';
import { HousesModule } from './houses/houses.module';
import { TgModule } from './tg/tg.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: '123',
      signOptions: { expiresIn: '60d' },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      csrfPrevention: false,
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
      formatError: (error) => {
        console.log(error);
        if (error.extensions?.errors && error.extensions?.statusCode) {
          return {
            message: error.message,
            errors: error.extensions.errors,
            statusCode: error.extensions.statusCode,
          };
        }

        return {
          message: error.message,
          statusCode: 500,
        };
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, 
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
      defaults: {
        from: `Proludi <${process.env.MAIL_USER}>`,
      },
      template: {
        dir: join(__dirname, '..', '..', 'src', 'templates'),
        adapter: new HandlebarsAdapter(),
      },
    }),
    UserModule,
    AuthModule,
    FeaturesModule,
    HousesModule,
    FilesModule,
    AppealModule,
    TgModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AppExceptionFilter,
    },
    AppResolver,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(graphqlUploadExpress({ maxFileSize: 10_000_000, maxFiles: 5 }))
      .forRoutes('graphql');
  }
}
