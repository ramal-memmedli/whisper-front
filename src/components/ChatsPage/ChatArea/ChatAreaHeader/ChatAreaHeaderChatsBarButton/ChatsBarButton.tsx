import { ChevronRight } from 'lucide-react'

type Props = {
    openChatsBar: boolean,
    setOpenChatsBar: React.Dispatch<React.SetStateAction<boolean>>
}

function ChatsBarButton({ openChatsBar, setOpenChatsBar }: Props) {
    return (
        <a onClick={() => { setOpenChatsBar(!openChatsBar) }} className="transition cursor-pointer hover:bg-white/10 hover:border-transparent rounded-md border text-white border-white/10 w-16 h-16 flex items-center justify-center ">
            <ChevronRight size={openChatsBar ? 18 : 24} className={"transition duration-500  " + (openChatsBar ? "translate-x-2" : "translate-x-1 rotate-180")}></ChevronRight>
            <ChevronRight size={openChatsBar ? 24 : 18} className={"transition duration-500  " + (openChatsBar ? "-translate-x-1" : "-translate-x-2 rotate-180")}></ChevronRight>
        </a>
    )
}

export default ChatsBarButton