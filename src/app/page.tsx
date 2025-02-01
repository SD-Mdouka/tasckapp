import Link from "next/link";
import prisma from "../utils/db";
import StatusBadge from "./components/StatuBadge";

const HomePage = async () => {
  const tasks = await prisma.task.findMany();
  return (
    <section>
      <h1 className="text-4xl font-semibold">
        Tasks List App
      </h1>
      <div style={{ display:"flex",justifyItems:'center',justifyContent:'end',marginBottom:'80px'}}
       className="flex items-center justify-end mb-20">
        <Link 
        href={"/task/add"}
        style={{backgroundColor:"#67e8f9",color:"black",borderRadius:'6px',fontSize:'20px',lineHeight:'28px'}}
        className="bg-[#67e8f9] hover:bg-cyan-400 transition-colors text-black py-1 px-2 text-xl font-semibold rounded-sm"
        >
          Add Task
        </Link>
       
      </div>
      <table
      style={{display:'table', alignItems:'center',marginTop:'20px',width:'100%'}} 
      className="table w-full text-left mt-5">
        <thead
        style={{borderBottomWidth:'2px',borderTopWidth:'2px',borderColor:'#d1d5db',fontSize:'20px',lineHeight:'20px'}} 
        className="border-t-2 border-b-2 border-gray-300 text-xl">
          <tr>
            <th style={{padding:'8px'}} className="p-2">#</th>
            <th>Task Title</th>
            <th>Task Status</th>
            <th>Task Details</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task ,index) => (
            <tr key={index} className="border-b border-gray-500">
              <td style={{padding:'8px'}} className="p-2">{index + 1}</td>
              <td>{task.title}</td>
              <td><StatusBadge status={task.status}/></td>
              <td>
                <Link href={`/task/${task.id}`} 
                style={{backgroundColor:'#1e40af',color:'white',borderRadius:'6px',padding:'8px'}}
                className="bg-blue-800 transition-colors text-white rounded-md p-2">
                Details</Link></td>
            </tr>) )}
        </tbody>
      </table>
    </section>
  )
}

export default HomePage;
