import Link from "next/link";

const HomePage = () => {
  return (
    <section>
      <h1 className="text-4xl font-semibold">
        Tasks List App
      </h1>
      <div className="flex items-center justify-end mb-20">
        <Link 
        href={"/task/add"}
        style={{backgroundColor:"#67e8f9",color:"black",borderRadius:'6px',fontSize:'20px',lineHeight:'28px'}}
        className="bg-[#67e8f9] hover:bg-cyan-400 transition-colors text-black py-1 px-2 text-xl font-semibold rounded-sm"
        >
          Add Task
        </Link>
       
      </div>
    </section>
  )
}

export default HomePage;
