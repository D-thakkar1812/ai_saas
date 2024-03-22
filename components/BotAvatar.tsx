import { Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () =>{
    return(
        <div>
            <Avatar className="h-8 w-8">
                <AvatarImage src="/logo.png" className="p-1"></AvatarImage>
            </Avatar>
        </div>
    );
}

export default BotAvatar;