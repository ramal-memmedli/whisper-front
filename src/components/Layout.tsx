import { useState } from "react";
import Sidebar from "./Sidebar";
import Messaging from "@/pages/Messaging";

function Layout() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="relative flex w-screen h-screen overflow-hidden bg-white dark:bg-black">
            <Sidebar openSidebar={openSidebar}/>
            <Messaging openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </div>
    )
}

export default Layout