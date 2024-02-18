import { ReactNode } from "react";

export default function PageTitle({ children, action = null }:{children: ReactNode, action?: ReactNode|null }){
    return (
        <div className="w-full flex flex-col md:flex-row justify-start md:justify-between items-center">
            <div className="text-xl font-semibold">{children}</div>
            <div className="flex flex-row">{action}</div>
        </div>
    );
}