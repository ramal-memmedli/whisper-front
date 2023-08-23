import UserTestData from '@/TestDatas/UserTestData'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal, Users, Stars, Settings2, LogOut, } from 'lucide-react'
import { useState } from 'react'


type Props = {}

function ChatsBarCurrentUser({ }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md border border-white/10 px-4 py-3 sm:h-16 sm:flex-row sm:items-center mb-4 ">

            <div className="leading-none flex items-center">
                <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={UserTestData.image} alt="@shadcn" />
                    <AvatarFallback className="dark:text-neutral-200">MR</AvatarFallback>
                </Avatar>
                <Badge className="ml-4" variant="outline">Online</Badge>
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
    )
}

export default ChatsBarCurrentUser