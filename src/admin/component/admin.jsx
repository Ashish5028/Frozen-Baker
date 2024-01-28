import { useState } from "react";
import cake from "../../assets/baker.png";
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
    if (!image) return;
    uploadImage(image);
    alert("image uploaded");
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
      await fetch("http://localhost:4050/api/upload/image", {
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
      <div className="text-3xl italic font-semibold text-textColor flex justify-center pt-5 ">
        Welcome to your Upload Page
      </div>
      <div className="flex pl-20">
        <img src={cake} className="h-16" />
        <p className="pt-4 italic text-bgColor text-2xl">
          Upload Your Product Details Here
        </p>
      </div>
      <div className=" flex bg-opacity-60 main  ">
        <div className="   w-1/2 rounded-md flex justify-center pt-5 ">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="text-bgColor text-lg italic">
              Enter Product Name
            </label>
            <br />
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              type="text"
              required
              className=" ring-1 mt-2  ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2"
            />
            <br />
            <br />
            <label className="text-bgColor text-lg italic ">
              Enter Product Price
            </label>
            <br />
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              name="price"
              type="number"
              required
              className="ring-1 mt-2  ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
            />

            <div className="mt-10">
              <div className="text-bgColor text-lg italic">
                Choose Product Image
              </div>
              <br />
              <input
                type="file"
                // value={() => fileInputState}
                onChange={(e) => handleChange(e)}
                accept="image/png,image/jpg,image/jpeg"
                className="text-bgColor italic cursor-pointer"
              />
            </div>
            <div className="flex justify-center m-auto py-2">
              <button
                type="submit"
                className="text-white rounded-md bg-bgColor px-7 py-2 my-5 "
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="px-8 w-1/2 my-4 ">
          <img
            src={image}
            className="h-96 w-96 rounded-md "
            alt=" Uploded Image Shown Here"
          ></img>
        </div>
      </div>
      {/* <AboutPage /> */}
    </>
  );
}

export default AdminPage;
