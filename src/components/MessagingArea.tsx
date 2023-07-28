import { ChevronLast } from "lucide-react"
import { Button } from "@/components/ui/button"

function MessagingArea({ openSidebar, setOpenSidebar }: { openSidebar: boolean, setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className={"duration-[150ms] w-full min-w-[50rem] flex flex-col py-4 pr-4 " + (openSidebar ? "ml-0" : "ml-[25rem]")}>
            <Button onClick={() => { setOpenSidebar(!openSidebar) }} variant="outline" className="ml-4 w-12 h-12 flex items-center justify-center">
                <ChevronLast className="text-white cursor-pointer"></ChevronLast>
            </Button>

        </div>
    )
}

export default MessagingArea