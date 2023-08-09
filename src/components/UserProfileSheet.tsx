import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from './ui/sheet'
import { Button } from './ui/button'
import User from '@/models/User'

function UserProfileSheet({ user, sheetTriggerContent }: { user: User, sheetTriggerContent: React.ReactNode }) {
    return (
        <Sheet key={user.id}>
            {sheetTriggerContent}
            <SheetContent side={"left"} className="dark:border-r-white/10">
                <SheetHeader>
                    <SheetTitle>{user.name + " " + user.surname}</SheetTitle>
                    <SheetDescription>{user.email}</SheetDescription>
                </SheetHeader>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default UserProfileSheet



{/* <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={u_ramal.image} alt="@shadcn" />
                    <AvatarFallback className="dark:text-neutral-200">MR</AvatarFallback>
                </Avatar> */}



