import { Module } from '@nestjs/common';
import { UserApisService } from './user-apis.service';
import { UserApisController } from './user-apis.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_PACKAGE_NAME } from '@app/common';
import { join } from 'path';
import { AUTH_SERVICE } from './constants';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: AUTH_PACKAGE_NAME,
          protoPath: join(__dirname, '../auth.proto'),

        },

      },
    ]),
  ],
  controllers: [UserApisController],
  providers: [UserApisService],
})

export class UserApisModule {
  
  
}
