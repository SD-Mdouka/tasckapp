"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { CreateTaskDro } from "./dtos";

//create task
export async function createTask({title,description}:CreateTaskDro) {
    
    if (typeof title !== "string" || title.length <2) return;
    if (typeof description !== "string" || description.length <4) return;

    return console.log("Required")
    await prisma.task.create({
      data: {
        title,description
      }
    });
    revalidatePath('/');
    redirect('/');
  }
