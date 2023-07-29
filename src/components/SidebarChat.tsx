import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge"

function SidebarChatContent() {
    return (
        <a href="#" className="flex justify-between items-center h-full w-full px-2">
            <div className="flex items-center w-full">
                <Avatar className="h-11 w-11 cursor-pointer mr-4">
                    <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                    <AvatarFallback className="dark:text-neutral-200">MR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full flex-1 pr-2">
                    <div className="flex items-center justify-between">
                        <h4 className="flex-1 text-lg font-semibold tracking-tight dark:text-white/80 mr-2">
                            Ceyhun
                        </h4>
                        <p className="text-sm text-muted-foreground dark:text-white/40">
                            10:09
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="flex-1 text-base text-muted-foreground dark:text-white/40">
                            Salam
                        </p>
                        <Badge>4</Badge>
                    </div>

                </div>
            </div>
        </a>
    )
}


function SidebarChat() {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="transition-colors flex h-[4.5rem] items-center hover:bg-white/10 text-sm">
                <SidebarChatContent />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                <ContextMenuItem inset>
                    Back
                    <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset disabled>
                    Forward
                    <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                    Reload
                    <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                    <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>
                            Save Page As...
                            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                        <ContextMenuItem>Name Window...</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Developer Tools</ContextMenuItem>
                    </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                    Show Bookmarks Bar
                    <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value="pedro">
                    <ContextMenuLabel inset>People</ContextMenuLabel>
                    <ContextMenuSeparator />
                    <ContextMenuRadioItem value="pedro">
                        Pedro Duarte
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
            </ContextMenuContent>
            <Separator className="ml-[4.25rem]" />
        </ContextMenu>
    )
}

export default SidebarChat