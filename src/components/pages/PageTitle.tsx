import { ReactNode } from "react";

export default function PageTitle({ children }:{children: ReactNode}){
    return (
        <div className="w-full">
            <div className="text-lg">{children}</div>
        </div>
    );
}