import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';

@Module({
  imports: [AuthModule, UserAuthModule],
  controllers: [],
  providers: [],
})
export class AuthModule {}
