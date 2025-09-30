import {Module} from '@nestjs/common';
import {AuthService} from './services/auth.service';
import {AuthResolver} from './controllers/auth.resolver';
import {UserModule} from "../user/user.module";

@Module({
    imports: [UserModule],
    providers: [AuthResolver, AuthService],
})
export class AuthModule {
}
