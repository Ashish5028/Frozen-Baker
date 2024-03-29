import "./team.css";

export default function Team() {
  return (
    <>
      <div className=" shadow-md rounded-md py-4  bg-white  md:mx-6">
        <div className="text-center ">
          <p className="text-3xl font-heading py-5">
            We're Super Professional At Our Skills
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 px-16 font-text py-5  md:grid-cols-4">
          <div className="   bg-cardColor   transition ease-out delay-150 hover:duration-500  ">
            <img src="team-1.jpg" alt="" className="rounded-t-md" />
            <div className="bg-cardColor space-y-2 p-3 ">
              <p className="text-center  text-xl">Full Name</p>
              <p className="text-center ">Designation</p>
            </div>
          </div>
          <div className=" md:h-64  bg-cardColor  transition ease-out delay-150  hover:duration-500  hover:shadow-xl  ">
            <img src="team-2.jpg" alt="" className="rounded-t-md" />
            <div className="bg-cardColor space-y-2 p-3">
              <p className="text-center  text-xl">Full Name</p>
              <p className="text-center ">Designation</p>
            </div>
          </div>
          <div className="   bg-cardColor  transition ease-out delay-150  hover:duration-500 hover:shadow-xl md:h-64  ">
            <img src="team-3.jpg" alt="" className="rounded-t-md" />
            <div className="bg-cardColor space-y-2 p-3">
              <p className="text-center  text-xl">Full Name</p>
              <p className="text-center ">Designation</p>
            </div>
          </div>
          <div className=" md:h-32  bg-cardColor  transition ease-out delay-150  hover:duration-500 hover:shadow-xl   ">
            <img src="team-4.jpg" alt="" className="rounded-t-md" />
            <div className="bg-cardColor space-y-2 p-3">
              <p className="text-center  text-xl">Full Name</p>
              <p className="text-center ">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
