import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu'
import { Separator } from '@/components/ui/separator'
import { LogOut } from 'lucide-react'
import ChatsBarChatCardContext from './ChatsBarChatCardContext/ChatsBarChatCardContext'
import ChatCardViewModel from '@/ViewModels/ChatsPage/ChatsBar/ChatCardViewModel'

type Props = {
    chatCard: ChatCardViewModel
}

function ChatsBarChatCard({ chatCard }: Props) {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="transition-colors flex h-[4.5rem] items-center hover:bg-white/10 text-sm">
                <ChatsBarChatCardContext username={chatCard.username} profileImage={chatCard.profileImage} profileImagePlaceholder={chatCard.imagePlaceholder} lastMessage={chatCard.lastMessage} lastMessageDate={chatCard.lastMessageDate} unreadMessageCount={chatCard.unreadMessageCount}/>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                <h4 className="mx-3 my-2 flex-1 font-semibold tracking-tight dark:text-white/80 mr-2">
                    {chatCard.username}
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

export default ChatsBarChatCard