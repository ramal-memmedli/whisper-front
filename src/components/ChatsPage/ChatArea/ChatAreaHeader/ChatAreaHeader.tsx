import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal, Users, Stars, Settings2, LogOut } from 'lucide-react'
import React from 'react'
import ChatAreaHeaderUser from './ChatAreaHeaderUser/ChatAreaHeaderUser'

type Props = {
}

function ChatAreaHeader({}: Props) {
    const [open, setOpen] = React.useState(false)
    return (

        <div className="flex flex-1 flex-col items-start justify-between rounded-md border border-white/10 px-4 py-3 sm:h-16 sm:flex-row sm:items-center">
            <ChatAreaHeaderUser/>

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

export default ChatAreaHeader