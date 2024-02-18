import SidebarClose from "@/components/ui/close-sidebar-btn";
import Image from "next/image";
import { SIDE_MENU_LIST } from "@/config/menu";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutDashboard } from "lucide-react"; 
import SideNavMenuItem from "@/components/menu/SideNavMenuItem";

export default function Sidebar() {


    return (
        <div id="sidebar" className="transition-all ease-in-out duration-500 h-full w-full md:w-72 border hidden md:block absolute z-50 md:relative left-0 bg-background">
            <div className="h-12 flex flex-row justify-between items-center border border-r-0 px-main-padding">
                <div>
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/icons/taskm_no_bg.svg"
                        alt="Next.js Logo"
                        width={30}
                        height={24}
                        priority
                    />
                </div>
                <div className="block md:hidden">
                    <SidebarClose />
                </div>
            </div>
            <ScrollArea className="px-main-padding">
                <div className=" flex flex-col py-3 gap-2">
                    {SIDE_MENU_LIST.map(menu => (
                        <SideNavMenuItem menu={menu} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}