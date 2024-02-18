"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (prevState: any,form: FormData) => {
  console.log(form.get("name"));
  if(!form.get('name')){
    return {
        error: 'Name Field Required',
    }
  }
  const data = {
    name: form.get("name") as string,
    description: form.get("description") as string | undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  let project = await db.project.create({
    data,
  });
  console.log('New Project', project);
  
  revalidatePath('/project');
  redirect('/project');
};
