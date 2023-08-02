import { ChevronLast, LogOut, MoreHorizontal, Settings2, Stars, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SheetTrigger } from "./ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import React from "react"
import UserProfileSheet from "./UserProfileSheet"

type User = {
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    image: string;
}

const u_ceyhun: User = {
    id: 88888,
    username: "Ceyhun3169",
    name: "Ceyhun",
    surname: "Memizade",
    email: "ceyhun3169@gmail.com",
    image: "https://picsum.photos/200"
}

function MessagingArea({ openSidebar, setOpenSidebar }: { openSidebar: boolean, setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [open, setOpen] = React.useState(false)

    return (
        <div className={"duration-500 w-full min-w-[50rem] flex flex-col py-4 pr-4 " + (openSidebar ? "ml-0" : "ml-[25rem]")}>
            <div className="messaging-area-header flex items-center ml-4">
                <Button onClick={() => { setOpenSidebar(!openSidebar) }} variant="outline" className="mr-4 w-16 h-16 flex items-center justify-center">
                    <ChevronLast className="text-white cursor-pointer"></ChevronLast>
                </Button>
                <div className="flex w-full flex-col items-start justify-between rounded-md border border-white/10 px-4 py-3 sm:flex-row sm:items-center">

                    <div className="leading-none flex items-center">
                        <UserProfileSheet user={u_ceyhun} sheetTriggerContent={
                            <SheetTrigger asChild>
                                <Avatar className="h-8 w-8 cursor-pointer">
                                    <AvatarImage src={u_ceyhun.image} alt="@shadcn" />
                                    <AvatarFallback className="dark:text-neutral-200">CM</AvatarFallback>
                                </Avatar>
                            </SheetTrigger>
                        } />
                        <Badge className="ml-4" variant="outline">a</Badge>
                    </div>
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
            </div>
        </div>
    )
}

export default MessagingArea