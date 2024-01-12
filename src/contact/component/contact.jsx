import React from "react";
import ImgPage from "../../component/imagePage";
import "./contact.css";
import carouls from "/src/assets/carouls-1.jpg";
import cake from "/src/assets/cake.jpg";
// bg-[url('/src/assets/carouls-1.jpg')]
function ContactPage() {
  return (
    <>
      <div className="">
        <div className="bg-[url('/src/assets/swap.jpg')] h-96 bg-no-repeat ">
          <p className="font-serif text-white text-6xl text-center pt-32 font-bold brightness-150">
            Contact Us
          </p>
        </div>
        <div className="text-center h-screen mt-10 px-10">
          <p className="text-5xl font-semibold font-serif text-textColor">
            If You Have Any Query,
            <br />
            Please Contact Us
          </p>
          <p className="px-72 mt-10">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done. Download Now.
          </p>
          <div className=" mt-10  bg-red-400"></div>
          <div className="mt-10  px-64 h-full    rounded-md  ">
            <div className="flex space-x-2 my-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-zinc-400 rounded-md outline-rose-300 "
              ></input>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-zinc-400 rounded-md outline-rose-300   "
              ></input>
            </div>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border w-full  border-zinc-400 rounded-md outline-rose-300 "
            ></input>
            <textarea
              className="w-full mt-3 border border-zinc-400   rounded-md outline-rose-300"
              rows={10}
            ></textarea>
            <button className="rounded-full px-8 py-4 mt-4 text-white bg-bgColor">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { ContactPage };
