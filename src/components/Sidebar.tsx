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
import { Separator } from "@/components/ui/separator"

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


function Sidebar({ openSidebar }: { openSidebar: boolean }) {
    const [label, setLabel] = React.useState("online")
    const [open, setOpen] = React.useState(false)



    return (
        <div className={"transition flex flex-col sidebar duration-[150ms] w-[25rem] absolute left-0 top-0 bottom-0 p-4 dark:bg-black border-r border-r-white/10     " + (openSidebar ? "-translate-x-[25rem]" : "-translate-x-0")}>

            <div className="flex w-full flex-col items-start justify-between rounded-md border border-white/10 px-4 py-3 sm:flex-row sm:items-center mb-4">

                <div className="leading-none flex items-center">
                    <Sheet key={"left"}>
                        <SheetTrigger asChild>
                            <Avatar className="h-8 w-8 cursor-pointer">
                                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                                <AvatarFallback className="dark:text-neutral-200">MR</AvatarFallback>
                            </Avatar>
                        </SheetTrigger>
                        <SheetContent side={"left"} className="dark:border-r-white/10">
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


            <ScrollArea className="rounded-md border h-full border-white/10">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <p className="text-sm text-muted-foreground dark:text-white/40 text-center my-4">Total 14 chats. All messages end-to-end encrypted.</p>
            </ScrollArea>


        </div>
    )
}

export default Sidebar