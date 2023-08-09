import UserProfileSheet from "../UserProfileSheet"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { SheetTrigger } from "../ui/sheet"
import User from "@/models/User"

function MessagingAreaHeaderUser({ user }: { user: User }) {
  return (
    <div className="leading-none flex items-center">
      <UserProfileSheet user={user} sheetTriggerContent={
        <SheetTrigger asChild>
          <a className="flex items-center cursor-pointer">
            <Avatar className="h-8 w-8 mr-4">
              <AvatarImage src={user.image} alt="@shadcn" />
              <AvatarFallback className="dark:text-neutral-200">CM</AvatarFallback>
            </Avatar>
            <a className="text-lg font-semibold tracking-tight dark:text-white/80">Ceyhun3169</a>
          </a>

        </SheetTrigger>
      } />
      <Badge className="ml-4 cursor-default" variant="outline">{user.status}</Badge>
    </div>
  )
}

export default MessagingAreaHeaderUser