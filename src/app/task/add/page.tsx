import Link from "next/link";
import AddTastForm from "../../components/AddTaskForm";


const AddTaskPage = () => {
  return (
    <section>
      <Link href={'/'} className="underline block mb-10">
        {"<< "} Back to tasks table
      </Link>
      <div
        style={{
          width: "66.666667%", margin: '0 auto', padding: '20px',
          borderRadius: '6px', backgroundColor: '#1e293b',
          borderWidth: '2px',
          borderColor: '#d1d5db'
        }}
        className="w-2/3 mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300">
        <h1 className="mb-7 font-bold text-3xl">Add Your Task</h1>
        <AddTastForm />
      </div>
    </section>
  )
}

export default AddTaskPage;
