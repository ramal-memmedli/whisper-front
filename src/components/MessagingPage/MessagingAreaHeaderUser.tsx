import UserProfileSheet from "../UserProfileSheet"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { SheetTrigger } from "../ui/sheet"

type User = {
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    image: string;
  }

function MessagingAreaHeaderUser({user}: {user: User}) {
  return (
    <div className="leading-none flex items-center">
            <UserProfileSheet user={user} sheetTriggerContent={
                <SheetTrigger asChild>
                    <Avatar className="h-8 w-8 cursor-pointer">
                        <AvatarImage src={user.image} alt="@shadcn" />
                        <AvatarFallback className="dark:text-neutral-200">CM</AvatarFallback>
                    </Avatar>
                </SheetTrigger>
            } />
            <Badge className="ml-4" variant="outline">a</Badge>
        </div>
  )
}

export default MessagingAreaHeaderUser