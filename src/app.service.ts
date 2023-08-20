import { Injectable } from '@nestjs/common';
import { User } from './entities/user-entity';

@Injectable()
export class AppService {
  private users: User[];

  constructor(){
    this.users = [];
  }
  postUser(newUser: User): void{
    this.users.push(newUser);
  }
}
