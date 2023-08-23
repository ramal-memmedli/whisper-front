import ChatAreaBody from './ChatAreaBody/ChatAreaBody'
import ChatsAreaFooter from './ChatAreaFooter/ChatsAreaFooter'
import ChatAreaHeader from './ChatAreaHeader/ChatAreaHeader'
import ChatsBarButton from './ChatAreaHeader/ChatAreaHeaderChatsBarButton/ChatsBarButton'

type Props = {
    openChatsBar: boolean,
    setOpenChatsBar: React.Dispatch<React.SetStateAction<boolean>>
}

function ChatArea({ openChatsBar, setOpenChatsBar }: Props) {
  return (
    <div className={"duration-500 w-full min-w-[50rem] flex flex-col p-4 " + (openChatsBar ? "ml-0" : "ml-[25rem]")}>
            <div className="messaging-area-header flex items-center gap-4 mb-4">
                <ChatsBarButton openChatsBar={openChatsBar} setOpenChatsBar={setOpenChatsBar}/>
                <ChatAreaHeader />
            </div>
            <div className="messaging-area-body flex-1">
                <ChatAreaBody/>
            </div>
            <div className="messaging-area-footer">
                <ChatsAreaFooter/>
            </div>
        </div>
  )
}

export default ChatArea