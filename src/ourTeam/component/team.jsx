import "./team.css";

export default function Team() {
  return (
    <>
      <div className="text-center mt-10">
        <p className="text-3xl font-heading py-5">
          We're Super Professional At Our Skills
        </p>
      </div>
      <div className=" flex justify-between px-16 font-text">
        <div className="  w-72 bg-cardColor   transition ease-out delay-150 hover:duration-500  ">
          <img src="team-1.jpg" alt="" className="rounded-t-md" />
          <div className="bg-cardColor space-y-2 p-3 ">
            <p className="text-center  text-xl">Full Name</p>
            <p className="text-center ">Designation</p>
          </div>
        </div>
        <div className=" h-64 w-72 bg-cardColor  transition ease-out delay-150  hover:duration-500  hover:shadow-xl  ">
          <img src="team-2.jpg" alt="" className="rounded-t-md" />
          <div className="bg-cardColor space-y-2 p-3">
            <p className="text-center  text-xl">Full Name</p>
            <p className="text-center ">Designation</p>
          </div>
        </div>
        <div className="h-64 w-72 bg-cardColor  transition ease-out delay-150  hover:duration-500 hover:shadow-xl   ">
          <img src="team-3.jpg" alt="" className="rounded-t-md" />
          <div className="bg-cardColor space-y-2 p-3">
            <p className="text-center  text-xl">Full Name</p>
            <p className="text-center ">Designation</p>
          </div>
        </div>
        <div className="h-64 w-72 bg-cardColor  transition ease-out delay-150  hover:duration-500 hover:shadow-xl   ">
          <img src="team-4.jpg" alt="" className="rounded-t-md" />
          <div className="bg-cardColor space-y-2 p-3">
            <p className="text-center  text-xl">Full Name</p>
            <p className="text-center ">Designation</p>
          </div>
        </div>
      </div>
    </>
  );
}
