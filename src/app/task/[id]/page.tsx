import prisma from "@/src/utils/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "../../components/StatuBadge";

interface TaskDetailProps {
  params : { id :string};
}

const TaskDetailsPage = async ({ params } :TaskDetailProps) => {
    const task = await prisma.task.findUnique({
        where: { id: parseInt(params.id)}
    });

    if(!task) notFound();

  return (
    <section>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center'}}
         className="flex items-center justify-between">
            <Link href={"/"} className="underline">
                {"<< "} Back to tasks table
            </Link>
            <div
            style={{ display:'flex', alignItems:'center'}} 
            className="flex items-center">
                <Link href={`/task/${task.id}/edit`} 
                style={{ backgroundColor:'#15803d', borderRadius:'8px', padding:'4px 8px', marginInline:'8px', fontSize:'20px',lineHeight:'28px'}}
                className="bg-green-700 hover:bg-green-600 transition-colors rounded-lg py-1 px-2 me-3 text-xl">
                    Edit
                </Link>
            <form action={''}>
            <button 
             style={{ backgroundColor:'#dc2626', borderRadius:'8px', padding:'8px 4px', display:'block',lineHeight:'28px',color:'white'}}
            className="bg-red-600 rounded-lg cursor-pointer inline-block text-white px-2 py-1 transition hover:bg-red-800">
                Delete
              </button>
            </form>
            </div>
        </div>
        <div 
        className="mt-16 p-5 rounded-lg bg-gray-600"
        style={
            {marginTop:'64px' , borderRadius:'8px',backgroundColor:'#4b5563'}
        }
        >
        
            <div 
            style={{display:'flex' ,alignItems:'center',justifyContent:'space-between'}}
            className="flex items-center justify-between">
                <h2 style={{fontWeight:'bold',fontSize:'30px',lineHeight:'36px'}} className="font-bold text-3xl">
                    {task.title}
                </h2>
                <StatusBadge status={task.status} />
                <small style={{color:'#facc15'}} className="text-yellow-400">
                    {new Date(task.createAt).toDateString()}
                </small>
                <p style={{marginTop:'20px' ,fontSize:'20px',lineHeight:'28px'}} className="mt-5 text-xl">
                    {task.description}
                </p>
            </div>
        </div>
    </section>
  )
}

export default TaskDetailsPage;
