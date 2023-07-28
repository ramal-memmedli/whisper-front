import { useState } from "react";
import MessagingArea from "./MessagingArea"
import Sidebar from "./Sidebar";

function Layout() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="relative flex w-screen h-screen overflow-hidden bg-white dark:bg-black">
            <Sidebar openSidebar={openSidebar}/>
            <MessagingArea openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </div>
    )
}

export default Layout