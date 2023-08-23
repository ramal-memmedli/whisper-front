import ChatsBarChatList from "./ChatsBarChatList/ChatsBarChatList"
import ChatsBarCurrentUser from "./ChatsBarCurrentUser/ChatsBarCurrentUser"

type Props = {
    openChatsBar: boolean
}

function ChatsBar({openChatsBar}: Props) {
  

    return (
        <div className={"transition flex flex-col sidebar duration-500 w-[25rem] absolute left-0 top-0 bottom-0 p-4 dark:bg-black border-r border-r-white/10     " + (openChatsBar ? "-translate-x-[25rem]" : "-translate-x-0")}>

            <ChatsBarCurrentUser/>

            <ChatsBarChatList/>
        </div>
    )
}

export default ChatsBar