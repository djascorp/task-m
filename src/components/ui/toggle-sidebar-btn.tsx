"use client";

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SidebarToggle() {
    const handleToggle = () => {
        const sidebar = document.getElementById("sidebar");
        sidebar?.classList.toggle("hidden");
    };

    return (
        <Button variant="outline" size="icon" onClick={handleToggle}>
            <Menu />
        </Button>
    )
}