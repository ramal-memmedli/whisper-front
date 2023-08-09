import { useState } from "react";
import Sidebar from "./Sidebar";
import Messaging from "@/pages/Messaging";

function Layout() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [chatScreen, setChatScreen] = useState("default");

    return (
        <div className="relative flex w-screen h-screen overflow-hidden bg-white dark:bg-black">
            <Sidebar openSidebar={openSidebar} setChatScreen={setChatScreen} chatScreen={chatScreen}/>
            <Messaging openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} chatScreen={chatScreen} />
        </div>
    )
}

export default Layout