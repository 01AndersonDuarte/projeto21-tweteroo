export class Tweet{
    private username: string;
    private tweet: string;

    constructor(username: string, tweet: string){
        this.username = username;
        this.tweet = tweet;
    }

    public getUsername() : string {
        return this.username;
    }

    public getTweet() : string {
        return this.tweet;
    }
}