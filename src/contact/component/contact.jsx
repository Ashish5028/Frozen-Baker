import React from "react";
import ImgPage from "../../component/imagePage";
import "./contact.css";
import carouls from "/src/assets/carouls-1.jpg";
import cake from "/src/assets/cake.jpg";
// bg-[url('/src/assets/carouls-1.jpg')]
const ContactPage = () => {
  return (
    <>
      <div className="bgImagess w-screen  ">
        {/* <img src={carouls}></img> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a,
          delectus atque repellendus accusantium unde sunt laudantium
          consectetur quibusdam provident iste quam suscipit possimus voluptates
          quaerat explicabo eos dolorem corporis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a,
          delectus atque repellendus accusantium unde sunt laudantium
          consectetur quibusdam provident iste quam suscipit possimus voluptates
          quaerat explicabo eos dolorem corporis?
        </p>
      </div>
    </>
  );
};

export default ContactPage;
