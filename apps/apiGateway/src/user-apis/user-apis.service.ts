import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserAuthServiceController ,createUserAuthDto,User,Empty,Users, UserAuthServiceControllerMethods,UserAuthServiceClient} from '@app/common';
import { AUTH_SERVICE } from './constants';
import { Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';


@Injectable()
export class UserApisService implements OnModuleInit{
  private userauthservice: UserAuthServiceClient;

  constructor(@Inject(AUTH_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.userauthservice =
      this.client.getService<UserAuthServiceClient>(AUTH_SERVICE);
  }

  create(createUserApiDto: createUserAuthDto) {
    return this.userauthservice.createUser(createUserApiDto)
  }

  findAll() {
    // return `This action returns all userApis`;
    return this.userauthservice.findAll({})
  }







  // findOne(id: number) {
  //   return `This action returns a #${id} userApi`;
  // }

  // update(id: number, updateUserApiDto: UpdateUserApiDto) {
  //   return `This action updates a #${id} userApi`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} userApi`;
  // }
}
