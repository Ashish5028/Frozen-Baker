import { FooterData } from "./data";
import "./footer.css";

function FooterPage() {
  return (
    <>
      <div className="bg-navBar h-[300px] ">
        <div className="flex justify-around px-10">
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
        <div className="font-text bg-black h-32  text-white flex justify-between px-10 py-10">
          <p className="">
            <span className="px-1">@</span>
            <span className="text-yellow-400 ">Your Site Name</span>, All Right
            Reserved
          </p>
          <p className="justify-items-end font-heading text-2xl text-yellow-500 cursor-pointer hover:text-yellow-700">
            Developed By Developer
          </p>
        </div>
      </div>
    </>
  );
}

export { FooterPage };
