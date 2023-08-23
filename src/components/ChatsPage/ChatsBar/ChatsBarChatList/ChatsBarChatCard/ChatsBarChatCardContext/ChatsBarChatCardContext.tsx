import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { CheckCheck } from 'lucide-react'

type Props = {
    username: string,
    profileImage: string,
    profileImagePlaceholder: string,
    lastMessage: string,
    lastMessageDate: Date,
    unreadMessageCount: number,
}

function ChatsBarChatCardContext({username, profileImage, profileImagePlaceholder, lastMessage, lastMessageDate, unreadMessageCount}: Props) {
    return (
        <a href="#" className="flex justify-between items-center h-full w-full px-4">
            <div className="flex items-center w-full">
                <Avatar className="h-11 w-11 cursor-pointer mr-4">
                    <AvatarImage className="rounded-full" src={profileImage} alt="@shadcn" />
                    <AvatarFallback className="dark:text-neutral-200">{profileImagePlaceholder}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full flex-1 pr-2">
                    <div className="flex items-center justify-between">
                        <h4 className="flex-1 text-lg font-semibold tracking-tight dark:text-white/80 mr-2">
                            {username}
                        </h4>
                        <p className="text-sm text-muted-foreground dark:text-white/40">
                            {lastMessageDate.getHours() + ":" + lastMessageDate.getMinutes()}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="flex items-center flex-1 text-base text-muted-foreground dark:text-white/40">
                            <CheckCheck size={18} className="mr-1 text-blue-400"/>
                            {lastMessage}
                        </p>
                        {unreadMessageCount === 0 ? null : <Badge>{unreadMessageCount.toString()}</Badge>}
                    </div>

                </div>
            </div>
        </a>
    )
}

export default ChatsBarChatCardContext