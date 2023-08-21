import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateUser } from './dtos/user-dto';
import { CreateTweet } from './dtos/tweet-dto';
import { Page } from './dtos/page-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('sign-up')
  postUser(@Body() body: CreateUser, @Res() res: Response) {
    this.appService.postUser(body);
    return res.sendStatus(200);
  }

  @Post('tweets')
  postTweet(@Body() body: CreateTweet, @Res() res: Response) {
    try {
      this.appService.postTweet(body);
      res.sendStatus(201);
    } catch (error) {
      res.status(401).send(error.message);
    }

  }

  @Get('tweets')
  getTweets(@Query() query: Page, @Res() res: Response) {
    try {
      res.send(this.appService.getTweets(query.page));
    } catch (error) {
      res.sendStatus(400);
    }
  }

  @Get('tweets/:username')
  getUserTweets(@Param("username") username: string) {
    return this.appService.getUserTweets(username);
  }

  @Get('/')
  health() {
    return "I'm okay!";
  }
}
