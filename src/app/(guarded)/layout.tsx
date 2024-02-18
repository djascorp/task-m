import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
export default function GuardedLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row w-screen h-screen  bg-background">
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="content">
                    {children}
                </div>
            </div>

        </div>
    )
}