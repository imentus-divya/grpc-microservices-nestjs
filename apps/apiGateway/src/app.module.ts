import { Module } from '@nestjs/common';
import { UserApisModule } from './user-apis/user-apis.module';


@Module({
  imports: [UserApisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
