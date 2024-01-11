import React from "react";
import ImgPage from "../../component/imagePage";
import "./contact.css";
import carouls from "/src/assets/carouls-1.jpg";
import cake from "/src/assets/cake.jpg";
// bg-[url('/src/assets/carouls-1.jpg')]
const ContactPage = () => {
  return (
    <>
      <div className=" bg-yellow-300 h-screen space-y-3 ">
        <div className="  p-20 space-y-2 ">
          <div className="h-72  bg-pink-400 rounded-md  transition ease-out delay-150 hover:duration-500  hover:shadow-xl hover:-translate-y-2 hover:bg-cardbgColor">
            <p>welcome to ContactPage</p>
            <p>Contact Us</p>
          </div>
          <div className=" bg-pink-400 rounded-md  transition ease-out delay-150 hover:duration-500  hover:shadow-xl hover:-translate-y-2 hover:bg-cardbgColor">
            <p>welcome to ContactPage</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
