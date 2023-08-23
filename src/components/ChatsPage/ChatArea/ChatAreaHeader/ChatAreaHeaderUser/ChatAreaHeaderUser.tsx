import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import User from '@/models/User'

const user: User = {
    id: 99999,
    username: "Ramal014",
    name: "Ramal",
    surname: "Memmedli",
    email: "memmedliramal2002@gmail.com",
    image: "https://picsum.photos/200",
    status: "online"
}

type Props = {}

function ChatAreaHeaderUser({}: Props) {
  return (
    <div className="leading-none flex items-center">
      <a className="flex items-center cursor-pointer">
        <Avatar className="h-8 w-8 mr-4">
          <AvatarImage src={user.image} alt="@shadcn" />
          <AvatarFallback className="dark:text-neutral-200">CM</AvatarFallback>
        </Avatar>
        <span className="text-lg font-semibold tracking-tight dark:text-white/80">{user.username}</span>
      </a>
      <Badge className="ml-4 cursor-default" variant="outline">{user.status}</Badge>
    </div>
  )
}

export default ChatAreaHeaderUser