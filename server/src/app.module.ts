import {MiddlewareConsumer, Module} from '@nestjs/common';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {GraphQLModule} from "@nestjs/graphql";
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {AppResolver} from "./app.resolver";
import {JwtModule} from '@nestjs/jwt';
import {APP_FILTER} from '@nestjs/core';
import {AppExceptionFilter} from './common/filters/AppException.filter';
import { FeaturesModule } from './features/features.module';
import { HousesModule } from './houses/houses.module';
import { FilesModule } from './files/files.module';
import {graphqlUploadExpress} from "graphql-upload-ts";
import { AppealModule } from './appeal/appeal.module';


@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: "123",
            signOptions: {expiresIn: '60d'},
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            csrfPrevention: false,
            autoSchemaFile: true,
            context: ({ req }) => ({ req }),
            formatError: (error) => {
                console.log(error)
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
        UserModule,
        AuthModule,
        FeaturesModule,
        HousesModule,
        FilesModule,
        AppealModule,
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
