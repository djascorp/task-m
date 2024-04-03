import db from "@/lib/db";
import PageTitle from "@/components/pages/PageTitle";
import FormEditProject from "./form";

export default async function ProjectCreatePage({ params }: { params: { id: number } }) {
    const project = await db.project.findUnique({
        where: {id: Number(params.id)}
    })

    return (
        <div>
            <PageTitle>Edit Project : {project?.name} </PageTitle>
            <p className="text-sm text-muted-foreground">A Project contain all the task that you will create.</p>
            <FormEditProject project={project!} />
        </div>
    )
}