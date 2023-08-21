import { IsNotEmpty, IsString, IsUrl, isURL } from "class-validator";

const send = { message: 'All fields are required!' };

export class CreateUser{
    @IsString(send)
    @IsNotEmpty(send)
    username: string;

    @IsUrl()
    @IsNotEmpty(send)
    avatar: string;    
}