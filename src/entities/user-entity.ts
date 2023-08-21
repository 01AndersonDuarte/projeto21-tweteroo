export class User{
    private username: string;
    private avatar: string;

    constructor(username: string, avatar: string){
        this.username = username;
        this.avatar = avatar;
    }
    
    public getUsername() : string {
        return this.username;
    }

    public getAvatar() : string {
        return this.avatar;
    }
    
}