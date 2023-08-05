import { LogOut, MoreHorizontal, Settings2, Stars, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import React from "react"
import MessagingAreaHeaderUser from "@/components/MessagingPage/MessagingAreaHeaderUser"
import MessagingAreaMessagesSection from "@/components/MessagingPage/MessagingAreaMessagesSection"
import OpenCloseSidebarButton from "@/components/MessagingPage/OpenCloseSidebarButton"
import MessagingAreaFooter from "@/components/MessagingPage/MessagingAreaFooter"


type User = {
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    image: string;
    status: string;
  }

const u_ceyhun: User = {
    id: 88888,
    username: "Ceyhun3169",
    name: "Ceyhun",
    surname: "Memizade",
    email: "ceyhun3169@gmail.com",
    image: "https://picsum.photos/200",
    status: "online"
}

function Messaging({ openSidebar, setOpenSidebar, chatScreen }: { openSidebar: boolean, setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>, chatScreen: string }) {


    return (
        <div className={"duration-500 w-full min-w-[50rem] flex flex-col p-4 " + (openSidebar ? "ml-0" : "ml-[25rem]")}>
            <div className="messaging-area-header flex items-center gap-4 mb-4">
                <OpenCloseSidebarButton openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                <MessagingAreaHeader />
            </div>
            <div className="messaging-area-body flex-1">
                <MessagingAreaMessagesSection/>
            </div>
            <div className="messaging-area-footer">
                <MessagingAreaFooter/>
            </div>
        </div>
    )
}

function MessagingAreaHeader() {
    const [open, setOpen] = React.useState(false)
    return (

        <div className="flex flex-1 flex-col items-start justify-between rounded-md border border-white/10 px-4 py-3 sm:h-16 sm:flex-row sm:items-center">
            <MessagingAreaHeaderUser user={u_ceyhun}/>

            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <MoreHorizontal className="text-white" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>Whisper</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            New group
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Stars className="mr-2 h-4 w-4" />
                            Starred messages
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings2 className="mr-2 h-4 w-4" />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Messaging