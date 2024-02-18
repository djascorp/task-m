import { ReactNode } from "react";

export default function PageTitle({ children }:{children: ReactNode}){
    return (
        <div className="w-full">
            <div className="text-xl font-semibold">{children}</div>
        </div>
    );
}