import PageTitle from "@/components/pages/PageTitle";
import { Button } from "@/components/ui/button";
import { FolderPlus } from "lucide-react";
import Link from "next/link";
import db from '@/lib/db';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function ProjectPage() {
    const projects = await db.project.findMany();
    return (
        <div>
            <PageTitle action={
                <>
                    <Link href="/project/create" className="btn-primary" ><FolderPlus width={18} /> New</Link>
                </>
            }>Project</PageTitle>
            <div className="flex flex-col gap-2 py-2">
                {projects.map(project => (
                    <Card key={project.id}>
                        <CardHeader>{project.name}</CardHeader>
                        {project.description && <CardContent className="text-muted-foreground text-sm">{project.description}</CardContent>}
                    </Card>
                ))}
            </div>
        </div>
    )
}