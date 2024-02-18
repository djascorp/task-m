import PageTitle from "@/components/pages/PageTitle";
import { Button } from "@/components/ui/button";
import { FolderPlus } from "lucide-react";
import Link from "next/link";

export default function ProjectPage(){
    return (
        <div>
            <PageTitle action={
                <>
                    <Link href="/project/create" className="btn-primary" ><FolderPlus width={18} /> New</Link>
                </>
            }>Project</PageTitle>
            <div className="">
                
            </div>
        </div>
    )
}