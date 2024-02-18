

import { type NavMenuItem } from "@/config/menu";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

export default function SideNavMenuItem({ menu }: { menu: NavMenuItem }) {

    const Icon = menu.icon ? menu.icon : null;
    const segment = useSelectedLayoutSegment();
    const isActive = menu.name == segment;

    return (
        <div>
            {menu.name == 'divider' ? <div className="h-1 border-t w-full"></div> : (
                <Link href={`/${menu.name}`} className={clsx(
                    'p-2 px-3 rounded-md text-sm transition-all hover:bg-accent flex flex-row items-center gap-2',
                    {
                        'bg-accent' : isActive
                    }
                )}>
                    {Icon && <Icon width={18} />} {menu.title} 
                </Link>
            )}
        </div>
    )
}