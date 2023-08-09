import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge"
import { CheckCheck, LogOut } from "lucide-react"

function SidebarChatContent({ username, image, imagePlaceholder, message, messageDate, unreadMessageCount }: { username: string, image: string, imagePlaceholder: string, message: string, messageDate: Date, unreadMessageCount: Number }) {
    return (
        <a href="#" className="flex justify-between items-center h-full w-full px-4">
            <div className="flex items-center w-full">
                <Avatar className="h-11 w-11 cursor-pointer mr-4">
                    <AvatarImage className="rounded-full" src={image} alt="@shadcn" />
                    <AvatarFallback className="dark:text-neutral-200">{imagePlaceholder}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full flex-1 pr-2">
                    <div className="flex items-center justify-between">
                        <h4 className="flex-1 text-lg font-semibold tracking-tight dark:text-white/80 mr-2">
                            {username}
                        </h4>
                        <p className="text-sm text-muted-foreground dark:text-white/40">
                            {messageDate.getHours() + ":" + messageDate.getMinutes()}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="flex items-center flex-1 text-base text-muted-foreground dark:text-white/40">
                            {username === "Ilkin3169" ? <CheckCheck size={18} className="mr-1 text-blue-400"/> : null}
                            {message}
                        </p>
                        {unreadMessageCount === 0 ? null : <Badge>{unreadMessageCount.toString()}</Badge>}
                    </div>

                </div>
            </div>
        </a>
    )
}


function SidebarChat({username, image, imagePlaceholder, message, messageDate, unreadMessageCount, setChatScreen, chatScreen }: { username: string, image: string, imagePlaceholder: string, message: string, messageDate: Date, unreadMessageCount: Number, setChatScreen: React.Dispatch<React.SetStateAction<string>>, chatScreen: string }) {
    return (
        <ContextMenu>
            <ContextMenuTrigger onClick={() => {
                setChatScreen(username)
                console.log(chatScreen)}} className="transition-colors flex h-[4.5rem] items-center hover:bg-white/10 text-sm">
                <SidebarChatContent username={username} image={image} imagePlaceholder={imagePlaceholder} message={message} messageDate={messageDate} unreadMessageCount={unreadMessageCount} />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                <h4 className="mx-3 my-2 flex-1 font-semibold tracking-tight dark:text-white/80 mr-2">
                    {username}
                </h4>
                <ContextMenuItem>
                    Mark as unread
                </ContextMenuItem>
                <ContextMenuItem>
                    Pin chat
                </ContextMenuItem>
                <ContextMenuSub>
                    <ContextMenuSubTrigger>User</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>Add to favorites</ContextMenuItem>
                        <ContextMenuItem>Report</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem className="text-red-600">
                            <LogOut className="mr-2 h-4 w-4" />
                            Block
                        </ContextMenuItem>
                    </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Delete chat
                </ContextMenuItem>
            </ContextMenuContent>
            <Separator className="ml-[4.75rem] w-auto" />
        </ContextMenu>
    )
}

export default SidebarChat