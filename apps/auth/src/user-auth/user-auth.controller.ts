import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserAuthService } from './user-auth.service';
import { UserAuthServiceController ,createUserAuthDto,User,Empty,Users, UserAuthServiceControllerMethods} from '@app/common';

@Controller()
@UserAuthServiceControllerMethods()

export class UserAuthController implements UserAuthServiceController {
  
  constructor(private readonly userAuthService: UserAuthService) {}

  // function name must be same as the one defined in proto file

  createUser(createUserAuthDto) {
    return this.userAuthService.create(createUserAuthDto);
  }

  findAll() {
    return this.userAuthService.findAll();
  }







  // @MessagePattern('findOneUserAuth')
  // findOne(@Payload() id: number) {
  //   return this.userAuthService.findOne(id);
  // }

  // @MessagePattern('updateUserAuth')
  // update(@Payload() updateUserAuthDto: UpdateUserAuthDto) {
  //   return this.userAuthService.update(updateUserAuthDto.id, updateUserAuthDto);
  // }

  // @MessagePattern('removeUserAuth')
  // remove(@Payload() id: number) {
  //   return this.userAuthService.remove(id);
  // }
}
