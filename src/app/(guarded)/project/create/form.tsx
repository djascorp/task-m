"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { create } from "@/app/api/project/actions";
import { useFormState } from "react-dom";
import { Alert,  AlertTitle } from "@/components/ui/alert";
import { MessageCircleWarning } from "lucide-react";

export default function FormCreateProject() {
    const [state, formAction] = useFormState(create, { error: '' })

    return (
        <form action={formAction} className="flex flex-col gap-3">
            { state.error && <Alert variant={"destructive"}>
                <MessageCircleWarning className="h-4 w-4" />
                <AlertTitle>{ state.error }</AlertTitle>
            </Alert>}
            <div>
                <Label htmlFor="name">Project Name</Label>
                <Input id="name" name="name" placeholder="Name of the Project" />
            </div>

            <Button type="submit">Enregistrer</Button>
        </form>
    )
}