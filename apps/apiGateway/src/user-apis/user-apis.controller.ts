import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserApisService } from './user-apis.service';
import { UserAuthServiceController ,createUserAuthDto,User,Empty,Users, UserAuthServiceControllerMethods} from '@app/common';


@Controller('user-apis')
export class UserApisController {
  constructor(private readonly userApisService: UserApisService) {}

  @Post()
  create(@Body() createUserApiDto: createUserAuthDto) {
    return this.userApisService.create(createUserApiDto);
  }

  @Get()
  findAll() {
    return this.userApisService.findAll();
  }








  

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userApisService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserApiDto: UpdateUserApiDto) {
  //   return this.userApisService.update(+id, updateUserApiDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userApisService.remove(+id);
  // }
}
