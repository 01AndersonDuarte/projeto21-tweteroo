import { Injectable } from '@nestjs/common';
import { User } from './entities/user-entity';
import { CreateUser } from './dtos/user-dto';
import { CreateTweet } from './dtos/tweet-dto';
import { Tweet } from './entities/tweet-entity';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }
  getUsers(): User[] {
    return this.users;
  }
  postUser(newUser: CreateUser): void {
    const addUser = new User(newUser.username, newUser.avatar);
    this.users.push(addUser);
  }

  postTweet(tweet: CreateTweet): void {
    if (!(this.users.some((u) => u.getUsername() === tweet.username))) {
      throw { message: 'This user is not on the system' };
    }
    const addTweet = new Tweet(tweet.username, tweet.tweet);
    this.tweets.unshift(addTweet);
  }

  getTweets(page: number) {
    if(page<=0){
      throw {};
    }
    const numPage = page ? page : 1;
    const maxTweets = 15;
    const start = maxTweets * (numPage - 1);
    const end = maxTweets * numPage;
    const response = [];

    for (let i = start; i < (end>this.tweets.length ? this.tweets.length : end); i++) {
      response.push(
        {
          username: this.tweets[i].getUsername(),
          avatar: this.users.find(u => u.getUsername() === this.tweets[i].getUsername()).getAvatar(),
          tweet: this.tweets[i].getTweet()
        });
    }

    return response;
  }

  getUserTweets(username: string){
    const response = []
    const avatar = this.users.find(u => u.getUsername() === username)?.getAvatar();
    for (let i = 0; i < this.tweets.length; i++) {
      if(this.tweets[i].getUsername()===username){
        response.push(
          {
            username,
            avatar,
            tweet: this.tweets[i].getTweet()
          });
      }
    }

    return response;
  }
}
