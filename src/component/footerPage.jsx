import { FooterData } from "./data";
import "./page.css";
import cake from "../assets/cake.jpg";
function FooterPage() {
  return (
    <>
      <div className="bgSize ">
        <div className=" mt-32 ml-auto pl-32  space-x-7 p-20 h-96">
          {FooterData.map((res) => {
            return (
              <>
                <div className="">
                  <div className="float-left text-white  space-y-3  justify-between    h-52 p-2">
                    <p className="text-3xl font-semibold font-serif py-5">
                      {res.heading}
                    </p>
                    <div className="flex space-x-2">
                      <p>{res.location}</p>
                      <p className="transition ease-out delay-75  hover:translate-x-3 hover:text-yellow-600 duration-300 cursor-pointer">
                        {res.add}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <p>{res.calls}</p>
                      <p className="transition ease-out delay-75   hover:translate-x-3 hover:text-yellow-600 duration-300 cursor-pointer">
                        {res.call}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <p>{res.mail}</p>
                      <p className="transition ease-out delay-75   hover:translate-x-3 hover:text-yellow-600 duration-300 cursor-pointer">
                        {res.email}
                      </p>
                    </div>
                    <p className="transition ease-out delay-75 pl-2  hover:translate-x-3 hover:text-yellow-600 duration-300 cursor-pointer">
                      {res.support}
                    </p>
                    <p className="transition ease-out delay-75  pl-2 hover:translate-x-3 hover:text-yellow-600 duration-300 cursor-pointer">
                      {res.term}
                    </p>
                    <div className="flex space-x-5 pt-5 ">
                      <p className="transition ease-out delay-75   hover:translate-x-2 hover:text-yellow-600 duration-300 cursor-pointer">
                        {res.twit}
                      </p>
                      <p className="transition ease-out delay-75   hover:translate-x-2 hover:text-yellow-600 duration-300 cursor-pointer">
                        {res.face}
                      </p>
                      <p className="transition ease-out delay-75   hover:translate-x-2 hover:text-yellow-600 duration-300 cursor-pointer">
                        {res.you}
                      </p>
                      <p className="transition ease-out delay-75 h-10  hover:translate-x-2 hover:text-yellow-600 duration-300 cursor-pointer">
                        {res.insta1}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <br />
        <br />
        <br />
        {/* <br /> */}
        <div className=" bg-black h-32  text-white flex justify-between px-10 py-10">
          <p className="">
            <span className="px-1">@</span>
            <span className="text-yellow-400 ">Your Site Name</span>, All Right
            Reserved
          </p>
          <p className="justify-items-end text-yellow-500 cursor-pointer hover:text-yellow-700">
            Develope By Developer
          </p>
        </div>
      </div>
    </>
  );
}

export { FooterPage };
