import SidebarToggle from "@/components/ui/toggle-sidebar-btn"
import { ModeToggle } from "@/components/ui/toggle-theme-btn"


export default function Header() {
    return (
        <div className="header h-12 border flex flex-row items-center justify-between px-main-padding">
            <div className="block md:hidden">
                <SidebarToggle />
            </div>
            <div className=""></div>
            <div className="actions">
                <ModeToggle />
            </div>
        </div>
    )
}