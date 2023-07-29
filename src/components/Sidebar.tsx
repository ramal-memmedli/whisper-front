import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ScrollArea } from "@/components/ui/scroll-area"

import * as React from "react"
import { Circle, LogOut, MoreHorizontal, Settings2, Stars, Users } from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"

import { Badge } from "@/components/ui/badge"
import SidebarChat from "./SidebarChat"

const labels = [
    "Online",
    "Offline",
    "Away From Keyboard",
]



type SidebarChatCard = {
    id: number;
    username: string;
    image: string;
    imagePlaceholder: string;
    message: string;
    messageDate: Date;
    unreadMessageCount: number;
};

const ceyhun: SidebarChatCard = {
    id: 1,
    username: "Ceyhun3169",
    image: "https://picsum.photos/200",
    imagePlaceholder: "CM",
    message: "Salam",
    messageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 3
}

const ilkin: SidebarChatCard = {
    id: 2,
    username: "Ilkin3169",
    image: "https://picsum.photos/200",
    imagePlaceholder: "IQ",
    message: "Salam",
    messageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 0
}

const ali: SidebarChatCard = {
    id: 3,
    username: "Ali3169",
    image: "https://picsum.photos/200",
    imagePlaceholder: "AA",
    message: "Salam",
    messageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 1
}

const ramal: SidebarChatCard = {
    id: 4,
    username: "Ramal014",
    image: "https://picsum.photos/200",
    imagePlaceholder: "MR",
    message: "Salam",
    messageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 2
}

const sidebarCards: SidebarChatCard[] = [ceyhun, ilkin, ali, ramal];



function Sidebar({ openSidebar }: { openSidebar: boolean }) {
    const [label, setLabel] = React.useState("online")
    const [open, setOpen] = React.useState(false)



    return (
        <div className={"transition flex flex-col sidebar duration-500 w-[25rem] absolute left-0 top-0 bottom-0 p-4 dark:bg-black border-r border-r-white/10 shadow-[inset_0_2rem_4rem_0_rgba(255,255,255,.04)]     " + (openSidebar ? "-translate-x-[25rem]" : "-translate-x-0")}>

            <div className="flex w-full flex-col items-start justify-between rounded-md border border-white/10 px-4 py-3 sm:flex-row sm:items-center mb-4 shadow-[inset_0_2rem_4rem_0_rgba(255,255,255,.04)]">

                <div className="leading-none flex items-center">
                    <Sheet key={"left"}>
                        <SheetTrigger asChild>
                            <Avatar className="h-8 w-8 cursor-pointer">
                                <AvatarImage src="https://picsum.photos/200" alt="@shadcn" />
                                <AvatarFallback className="dark:text-neutral-200">MR</AvatarFallback>
                            </Avatar>
                        </SheetTrigger>
                        <SheetContent side={"left"} className="dark:border-r-white/10 shadow-[inset_0_2rem_4rem_0_rgba(255,255,255,.04)]">
                            <SheetHeader>
                                <SheetTitle>Ramal Məmmədli</SheetTitle>
                                <SheetDescription>
                                    memmedliramal2002@gmail.com
                                </SheetDescription>
                            </SheetHeader>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
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
            </div>


            <ScrollArea className="rounded-md border h-full border-white/10 shadow-[inset_0_2rem_4rem_0_rgba(255,255,255,.04)]">


                {sidebarCards.map(function (data: SidebarChatCard) {
                    return (
                        <SidebarChat key={data.id} username={data.username} image={data.image} imagePlaceholder={data.imagePlaceholder} message={data.message} messageDate={data.messageDate} unreadMessageCount={data.unreadMessageCount} />
                    )
                })}


                <p className="text-sm text-muted-foreground dark:text-white/40 text-center my-4">Total {sidebarCards.length} chats. All messages end-to-end encrypted.</p>
            </ScrollArea>


        </div>
    )
}

export default Sidebar