import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserAuthServiceController ,createUserAuthDto,User,Empty,Users, UserAuthServiceControllerMethods} from '@app/common';
import { randomUUID } from 'crypto';


@Injectable()
export class UserAuthService implements OnModuleInit{
  private readonly users: User[] = [];

  onModuleInit()
  {
    for (let i = 0; i <= 100; i++) {
      const types=['driver','customer']
      const randomIndex = Math.floor(Math.random() * types.length);
      const type=types[randomIndex]
      this.create({ id : i, username:`user-${i} `, password: randomUUID(),userType: type });
    }
    
  }

  create(createUserAuthDto: createUserAuthDto) 
  {
    const user: User = {
      id: 1,
      username: "username123",
      password: "password123",
      userType: "password123",
    };
    console.log("🚀 ~ UserAuthService ~ user:", user)
    
    return user
  }
  

  findAll():Users {
    // return `This action returns all userAuth`;
    return { users: this.users };
  }












  // findOne(id: number) {
  //   return `This action returns a #${id} userAuth`;
  // }

  // update(id: number, updateUserAuthDto: UpdateUserAuthDto) {
  //   return `This action updates a #${id} userAuth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} userAuth`;
  // }
}
