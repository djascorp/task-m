import PageTitle from "@/components/pages/PageTitle";
import FormCreateProject from "./form";

export default async function ProjectCreatePage() {
    
    return (
        <div>
            <PageTitle>Create new Project</PageTitle>
            <p className="text-sm text-muted-foreground">A Project contain all the task that you will create.</p>
            <FormCreateProject />
        </div>
    )
}