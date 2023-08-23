import ChatArea from "@/components/ChatsPage/ChatArea/ChatArea";
import ChatsBar from "@/components/ChatsPage/ChatsBar/ChatsBar";

import { useState } from "react";

type Props = {}

function Chats({}: Props) {
  const [openChatsBar, setOpenChatsBar] = useState(false);

    return (
        <div className="relative flex w-screen h-screen overflow-hidden bg-white dark:bg-black">
            <ChatsBar openChatsBar={openChatsBar} />
            <ChatArea openChatsBar={openChatsBar} setOpenChatsBar={setOpenChatsBar} />
        </div>
    )
}

export default Chats
