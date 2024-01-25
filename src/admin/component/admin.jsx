import { useState } from "react";
import axios from "axios";
import { FooterPage } from "../../component/footerPage";
import "./style.css";
import AboutPage from "../../component/aboutPage";
function AdminPage() {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
    console.log(image);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    uploadImage(image);
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFile(file);
    console.log(file);
  };
  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch("http://localhost:3001/api/upload/image", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ data: base64EncodedImage, name, price }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-xl text-yellow-200 shadow-md flex justify-center p-7 bg-black">
        Welcome to your page
      </div>
      <div className=" flex p-10 bg-opacity-60 main">
        <div className="bg-yellow-800 mx-10 p-5 w-1/2 rounded-md flex justify-center py-5 ">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="py-5 text-white">Enter Product Name</label>
            <br />
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              type="text"
              required
              className="rounded-md  py-1 outline-none pl-2 shadow-sm my-2"
            />
            <br />
            <br />
            <label className="py-5 text-white">Enter Product Price</label>
            <br />
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              name="price"
              type="number"
              required
              className="rounded-md  py-1 outline-none pl-2 shadow-sm mt-2"
            />
            <br />
            <br />

            <div className="mt-1">
              <div className="text-white py-2">Choose Product Image</div>
              <br />
              <input
                type="file"
                // value={() => fileInputState}
                onChange={(e) => handleChange(e)}
                accept="image/png,image/jpg,image/jpeg"
                className=""
              />
            </div>
            <div className="flex justify-center m-auto py-2">
              <button
                type="submit"
                className="text-white rounded-md bg-black px-5 py-2 my-5 "
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="px-8 w-1/2 my-3 ">
          <img
            src={image}
            className="h-96 w-96  "
            alt=" Uploded Image Shown Here"
          ></img>
        </div>
      </div>
      <AboutPage />
    </>
  );
}

export { AdminPage };
