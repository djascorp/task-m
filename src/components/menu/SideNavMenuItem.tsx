import { type NavMenuItem } from "@/config/menu";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function SideNavMenuItem({ menu }: { menu: NavMenuItem }) {
    const Icon = menu.icon?menu.icon:null
    return (
        <Link href={`/${menu.name}`} className="p-2 px-3 rounded-md text-sm transition-all hover:bg-accent flex flex-row items-center gap-2">
           { Icon && <Icon width={18} />} {menu.title}
        </Link>
    )
}