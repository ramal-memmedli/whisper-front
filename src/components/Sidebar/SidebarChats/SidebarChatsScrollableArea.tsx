import { ScrollArea } from '../../ui/scroll-area'

import SidebarChat from "./SidebarChat/SidebarChat"

// Models and ViewModels

import sidebarCards from "@/TestDatas/SidebarChatCardTestData"
import SidebarChatCardViewModel from "@/ViewModels/SidebarChatCardViewModel"

function SidebarChatsScrollableArea({sidebarChatCards, setChatScreen, chatScreen}: {sidebarChatCards: SidebarChatCardViewModel[], setChatScreen: React.Dispatch<React.SetStateAction<string>>, chatScreen: string}) {
  return (
    <ScrollArea className="flex-1 rounded-md border border-white/10 ">


                {sidebarChatCards.map(function (data: SidebarChatCardViewModel) {
                    return (
                        <SidebarChat chatScreen={chatScreen} setChatScreen={setChatScreen} key={data.id} username={data.username} image={data.image} imagePlaceholder={data.imagePlaceholder} message={data.message} messageDate={data.messageDate} unreadMessageCount={data.unreadMessageCount} />
                    )
                })}


                <p className="text-sm text-muted-foreground dark:text-white/40 text-center my-4">Total {sidebarCards.length} chats. All messages end-to-end encrypted.</p>
            </ScrollArea>
  )
}

export default SidebarChatsScrollableArea