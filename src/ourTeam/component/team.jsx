import "./team.css";

export default function Team() {
  return (
    <>
      <div className=" flex justify-between p-20 ">
        <div className="  w-72 bg-cardColor   transition ease-out delay-150 hover:duration-500  hover:shadow-xl hover:-translate-y-3   hover:bg-cardbgColor">
          <img src="team-1.jpg" alt="" className="rounded-t-md" />
          <div className="bg-cardColor space-y-2 p-3 ">
            <p className="text-center  text-xl">Full Name</p>
            <p className="text-center ">Designation</p>
          </div>
        </div>
        <div className=" h-64 w-72 bg-cardColor  transition ease-out delay-150  hover:duration-500  hover:shadow-xl hover:-translate-y-3  hover:bg-cardbgColor">
          <img src="team-2.jpg" alt="" className="rounded-t-md" />
          <div className="bg-cardColor space-y-2 p-3">
            <p className="text-center  text-xl">Full Name</p>
            <p className="text-center ">Designation</p>
          </div>
        </div>
        <div className="h-64 w-72 bg-cardColor  transition ease-out delay-150  hover:duration-500 hover:shadow-xl hover:-translate-y-3  hover:bg-cardbgColor">
          <img src="team-3.jpg" alt="" className="rounded-t-md" />
          <div className="bg-cardColor space-y-2 p-3">
            <p className="text-center  text-xl">Full Name</p>
            <p className="text-center ">Designation</p>
          </div>
        </div>
        <div className="h-64 w-72 bg-cardColor  transition ease-out delay-150  hover:duration-500 hover:shadow-xl hover:-translate-y-3  hover:bg-cardbgColor">
          <img src="team-4.jpg" alt="" className="rounded-t-md" />
          <div className="bg-cardColor space-y-2 p-3">
            <p className="text-center  text-xl">Full Name</p>
            <p className="text-center ">Designation</p>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis
        laborum magnam eum illum, blanditiis ullam perspiciatis voluptate
        recusandae nemo doloremque sint, rerum quia placeat, saepe temporibus
        omnis quaerat voluptatibus.
      </p>
      <span className="span">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
        corrupti repudiandae ullam hic quo, illum sequi provident doloremque
        fugiat non, facilis officiis labore ex consequatur delectus voluptatum
        neque porro esse!gfh
      </span>
    </>
  );
}
