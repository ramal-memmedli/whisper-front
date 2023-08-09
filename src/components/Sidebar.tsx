import * as React from "react"

// User Interface

import {
    Avatar, AvatarFallback, AvatarImage,
} from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    SheetTrigger,
} from "@/components/ui/sheet"

import { Circle, LogOut, MoreHorizontal, Settings2, Stars, Users } from "lucide-react"

import {
    Command, CommandEmpty, CommandGroup, CommandItem, CommandList,
} from "@/components/ui/command"

import {
    DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"

import { Badge } from "@/components/ui/badge"

import UserProfileSheet from "./UserProfileSheet"

// Models and ViewModels

import sidebarCards from "@/TestDatas/SidebarChatCardTestData"

// Temporary Imports

import UserTestData from "@/TestDatas/UserTestData"
import SidebarChatsScrollableArea from "./SidebarChatsScrollableArea"

// -------------------------------------------------------------------------------------------------------

function Sidebar({ openSidebar,
                   chatScreen,
                   setChatScreen
                 }: { openSidebar: boolean,
                      chatScreen: string,
                      setChatScreen: React.Dispatch<React.SetStateAction<string>>
                    }) {


    const [label, setLabel] = React.useState("online")
    const [open, setOpen] = React.useState(false)

    const labels = [
        "Online",
        "Offline",
        "Away From Keyboard",
    ]

    return (
        <div className={"transition flex flex-col sidebar duration-500 w-[25rem] absolute left-0 top-0 bottom-0 p-4 dark:bg-black border-r border-r-white/10     " + (openSidebar ? "-translate-x-[25rem]" : "-translate-x-0")}>

            {/* <div className="flex w-full flex-col items-start justify-between rounded-md border border-white/10 px-4 py-3 sm:h-16 sm:flex-row sm:items-center mb-4 ">

                <div className="leading-none flex items-center">
                    <UserProfileSheet user={UserTestData} sheetTriggerContent={
                        <SheetTrigger asChild>
                            <Avatar className="h-8 w-8 cursor-pointer">
                                <AvatarImage src={UserTestData.image} alt="@shadcn" />
                                <AvatarFallback className="dark:text-neutral-200">MR</AvatarFallback>
                            </Avatar>
                        </SheetTrigger>
                    } />
                    <Badge className="ml-4" variant="outline">{label}</Badge>
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
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Circle className="mr-2 h-4 w-4" />
                                    Set status
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="p-0">
                                    <Command>
                                        <CommandList>
                                            <CommandEmpty>No label found.</CommandEmpty>
                                            <CommandGroup>
                                                {labels.map((label) => (
                                                    <CommandItem
                                                        key={label}
                                                        onSelect={(value) => {
                                                            setLabel(value)
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        {label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                                <LogOut className="mr-2 h-4 w-4" />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div> */}


            <SidebarChatsScrollableArea sidebarChatCards={sidebarCards} setChatScreen={setChatScreen} chatScreen={chatScreen}/>


        </div>
    )
}

export default Sidebar