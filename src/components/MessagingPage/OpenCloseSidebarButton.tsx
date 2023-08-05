import { ChevronRight } from 'lucide-react'

function OpenCloseSidebarButton({ openSidebar, setOpenSidebar }: { openSidebar: boolean, setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <a onClick={() => { setOpenSidebar(!openSidebar) }} className="transition cursor-pointer hover:bg-white/10 hover:border-transparent rounded-md border text-white border-white/10 w-16 h-16 flex items-center justify-center ">
            <ChevronRight size={openSidebar ? 18 : 24} className={"transition duration-500  " + (openSidebar ? "translate-x-2" : "translate-x-1 rotate-180")}></ChevronRight>
            <ChevronRight size={openSidebar ? 24 : 18} className={"transition duration-500  " + (openSidebar ? "-translate-x-1" : "-translate-x-2 rotate-180")}></ChevronRight>
        </a>
    )
}

export default OpenCloseSidebarButton