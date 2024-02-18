"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";


export default function SidebarClose() {
    const handleToggle = () => {
        const sidebar = document.getElementById("sidebar");
        sidebar?.classList.toggle("hidden");
    };

    return (
        <Button variant='outline' size='icon' onClick={handleToggle}>
            <X />
        </Button>
    )
}