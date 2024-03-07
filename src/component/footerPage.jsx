import { FooterData } from "./data";
import "./footer.css";

function FooterPage() {
  return (
    <>
      <div className="bg-navBar h-full mx-6 rounded-md  md:h-[300px] ">
        <div className="grid grid-cols-1  px-16 md:grid-cols-3 md:px-10 md:h-[300px]">
          {FooterData.map((res) => {
            return (
              <>
                <div className=" text-white  space-y-3">
                  <p className="text-3xl font-heading  py-5">{res.heading}</p>
                  <div className="flex space-x-2">
                    <p>{res.location}</p>
                    <p className=" footerCss">{res.add}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p>{res.calls}</p>
                    <p className="footerCss">{res.call}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p>{res.mail}</p>
                    <p className="footerCss">{res.email}</p>
                  </div>
                  <p className="footerCss pl-2">{res.support}</p>
                  <p className="footerCss pl-2">{res.term}</p>
                  <div className="flex space-x-6 pt-3 ">
                    <p className="footerCss">{res.twit}</p>
                    <p className="footerCss">{res.face}</p>
                    <p className="footerCss">{res.you}</p>
                    <p className="footerCss">{res.insta1}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="font-text bg-black px-16 space-y-5 py-5  md:flex justify-between items-centerP md:h-32  text-white  md:px-10  md:py-10">
          <div className="">
            <span className="px-1">@</span>
            <span className="text-yellow-400 ">Your Site Name</span>, All Right
            Reserved
          </div>
          <div className="justify-items-end font-heading text-2xl text-yellow-500 cursor-pointer hover:text-yellow-700">
            Developed By Developer
          </div>
        </div>
      </div>
    </>
  );
}

export { FooterPage };
