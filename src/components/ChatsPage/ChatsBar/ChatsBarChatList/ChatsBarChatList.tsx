import { ScrollArea } from "@/components/ui/scroll-area"
import ChatsBarChatCard from "./ChatsBarChatCard/ChatsBarChatCard"
import ChatCardViewModel from "@/ViewModels/ChatsPage/ChatsBar/ChatCardViewModel"





const ceyhun: ChatCardViewModel = {
    userId: 1,
    username: "Ceyhun3169",
    profileImage: "https://picsum.photos/200",
    imagePlaceholder: "CM",
    lastMessage: "Salam",
    lastMessageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 3
}

const ilkin: ChatCardViewModel = {
    userId: 2,
    username: "Ilkin3169",
    profileImage: "https://picsum.photos/200",
    imagePlaceholder: "IQ",
    lastMessage: "Salam",
    lastMessageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 0
}

const ali: ChatCardViewModel = {
    userId: 3,
    username: "Ali3169",
    profileImage: "https://picsum.photos/200",
    imagePlaceholder: "AA",
    lastMessage: "Salam",
    lastMessageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 1
}

const ramal: ChatCardViewModel = {
    userId: 4,
    username: "Ramal014",
    profileImage: "https://picsum.photos/200",
    imagePlaceholder: "MR",
    lastMessage: "Salam",
    lastMessageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 2
}

const chats: ChatCardViewModel[] = [ceyhun, ilkin, ali, ramal];






type Props = {}

function ChatsBarChatList({}: Props) {
    return (
        <ScrollArea className="flex-1 rounded-md border border-white/10 ">
    
    
                    {chats.map(function (chatCard: ChatCardViewModel) {
                        return (
                            <ChatsBarChatCard key={chatCard.userId} chatCard={chatCard}/>
                        )
                    })}
    
    
                    <p className="text-sm text-muted-foreground dark:text-white/40 text-center my-4">Total {chats.length} chats. All messages end-to-end encrypted.</p>
                </ScrollArea>
      )
}

export default ChatsBarChatList