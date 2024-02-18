

import { type NavMenuItem } from "@/config/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useComputed } from "@preact/signals-react";

export default function SideNavMenuItem({ menu }: { menu: NavMenuItem }) {

    const Icon = menu.icon ? menu.icon : null;
    const pathname = usePathname();
    const isActive = useComputed(() => (pathname === '/' + menu.name))


    return (
        <div>
            {menu.name == 'divider' ? <div className="h-1 border-t w-full"></div> : (
                <Link href={`/${menu.name}`} className={` ${isActive.value && 'bg-accent'} p-2 px-3 rounded-md text-sm transition-all hover:bg-accent flex flex-row items-center gap-2`}>
                    {Icon && <Icon width={18} />} {menu.title}
                </Link>
            )}
        </div>
    )
}