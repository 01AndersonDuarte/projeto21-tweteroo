import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user-entity';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('sign-up')
  postUser(@Body() newUser: User, @Res() res: Response) {
    this.appService.postUser(newUser);
    return res.sendStatus(200);
  }
}
