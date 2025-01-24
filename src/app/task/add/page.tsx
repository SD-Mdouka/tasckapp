import Link from "next/link";

//server action
async function createTask(formData:FormData) {
  "use server";
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  if(!title || !description)
  return console.log({title,description})
}

const AddTaskPage = () => {
    return (
      <section>
       <Link href={'/'} className="underline block mb-10">
          {"<< "} Back to tasks table
       </Link>
       <div
       style={{width:"66.666667%", margin:'0 auto', padding:'20px',
         borderRadius:'6px', backgroundColor:'#1e293b',
          borderWidth:'2px',
           borderColor:'#d1d5db'}} 
       className="w-2/3 mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300">
            <h1 className="mb-7 font-bold text-3xl">Add Your Task</h1>
            <form action={createTask} style={{display:'flex', flexDirection:"column", gap:'24px'}} className="flex flex-col gap-6"> 
                <input type="text" name="title" placeholder="Task Title" 
                className="p-2 text-xl rounded-md text-gray-950"
                />
                <textarea name="description" rows={5} 
                placeholder="Task Description" 
                className="p-2 text-xl rounded-md text-gray-950 resize-none">
                </textarea>
                <button type="submit" style={{backgroundColor:"#67e8f9",color:"black",padding:"12px",borderRadius:'6px',fontSize:'20px',lineHeight:'28px'}} 
                className="bg-[#67e8f9] hover:bg-cyan-400 text-black
                 font-semibold text-xl rounded-md p-3 transition-colors">
                    Add Task
                </button>
            </form>
       </div>
      </section>
    )
  }
  
  export default AddTaskPage;
  