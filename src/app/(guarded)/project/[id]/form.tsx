"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { create } from "@/app/api/project/actions";
import { useFormState } from "react-dom";
import { Alert,  AlertTitle } from "@/components/ui/alert";
import { MessageCircleWarning } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Project } from "@prisma/client";

export default function FormEditProject({ project } : { project : Project}) {
    const [state, formAction] = useFormState(create, { error: '' })

    return (
        <form action={formAction} className="flex flex-col gap-3">
            { state.error && <Alert variant={"destructive"}>
                <MessageCircleWarning className="h-4 w-4" />
                <AlertTitle>{ state.error }</AlertTitle>
            </Alert>}
            <div className="flex-col space-y-1.5">
                <Label htmlFor="name">Project Name *</Label>
                <Input id="name" name="name" placeholder="Name of the Project" value={project.name} />
            </div>
            <div className="flex-col space-y-1.5">
                <Label htmlFor="description">Project Desciption</Label>
                <Textarea id="description" name="description" placeholder="Description of the Project" >{project.description}</Textarea>
            </div>
        
            <input type="hidden" name="id" value={project.id} />
            <Button type="submit">Enregistrer</Button>
        </form>
    )
}