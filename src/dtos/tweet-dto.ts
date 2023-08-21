import { IsNotEmpty, IsString, IsUrl, buildMessage } from "class-validator";

const send = { message: 'All fields are required!' };

export class CreateTweet {
    @IsString(send)
    @IsNotEmpty(send)
    username: string;

    @IsString(send)
    @IsNotEmpty(send)
    tweet: string;
}