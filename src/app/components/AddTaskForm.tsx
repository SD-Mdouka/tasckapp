"use client";

import { createTask } from "@/src/utils/action";
import { CreateTaskDro } from "@/src/utils/dtos";
import { createTaskSchema } from "@/src/utils/validationShema";
import { toast } from "react-toastify";

const AddTastForm = () => {
  const clientAction = async (formData: FormData) => {
    const title = formData.get('title')?.toString();
    const description = formData.get('description')?.toString();
    const validation = createTaskSchema.safeParse({ title, description });
    if (!validation.success) {
      return toast.error(validation.error.errors[0].message);
    }
    await createTask({ title, description } as CreateTaskDro);
  }
  return (
    <form action={clientAction} style={{ display: 'flex', flexDirection: "column", gap: '24px', color: 'black' }} className="flex flex-col gap-6">
      <input type="text" name="title" placeholder="Task Title"
        className="p-2 text-xl rounded-md text-black"
      />
      <textarea name="description" rows={5}
        placeholder="Task Description"
        className="p-2 text-xl rounded-md text-black resize-none">
      </textarea>
      <button type="submit" style={{ backgroundColor: "#67e8f9", color: "black", padding: "12px", borderRadius: '6px', fontSize: '20px', lineHeight: '28px' }}
        className="bg-[#67e8f9] hover:bg-cyan-400 text-black
           font-semibold text-xl rounded-md p-3 transition-colors">
        Add Task
      </button>
    </form>
  )
}

export default AddTastForm;
