import { useState } from "react";
// import cake from "../../assets/baker.png";
import logo from "../../../assets/cake.jpg";
import { HiCake } from "react-icons/hi2";
import { BsCake } from "react-icons/bs";

import { IoCloudUploadSharp } from "react-icons/io5";
import { createProductApi } from "../../../app/apiUrls";
function CakeUpload() {
  const [price, setPrice] = useState("");
  const [flavour, setFlavour] = useState("");
  const [weight, setWeight] = useState("");
  const [shape, setShape] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  function preFile(file) {
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
    preFile(file);
    console.log(file);
  };
  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch(createProductApi, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          flavour,
          weight,
          price,
          shape,
          data: base64EncodedImage,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="bg-stone-100 h-screen">
        <p className="text-3xl   font-heading  text-bgColor flex justify-center pt-5 ">
          <IoCloudUploadSharp size="40px" className="mr-3" /> Welcome here for
          Upload Cake
        </p>
        <div className=" flex bg-opacity-60 justify-evenly  px-5">
          <div className=" 2/3 rounded-md  ">
            <p className="pt-4  font-heading text-textColor text-2xl flex justify-center items-center py-3">
              <BsCake className="text-headingColor mr-3" fontSize="40px" />{" "}
              Upload Your Cake Details Here
            </p>

            <form
              onSubmit={(e) => handleSubmit(e)}
              className="grid grid-cols-2 gap-6"
            >
              <div>
                <label className="text-textColor  pl-1 font-text ">
                  Cake Flavour
                </label>
                <br />
                <input
                  onChange={(e) => setFlavour(e.target.value)}
                  name="flavour"
                  type="text"
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>
              <div>
                <label className="text-textColor  pl-1 font-text ">
                  Cake Price
                </label>
                <br />
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  name="price"
                  type="number"
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>
              <div>
                <label className="text-textColor  pl-1 font-text ">
                  Cake Weight
                </label>
                <br />
                <input
                  onChange={(e) => setWeight(e.target.value)}
                  name="weight"
                  type="text"
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>

              <div>
                <label className="text-textColor  pl-1 font-text ">
                  Cake Shape
                </label>
                <br />
                <input
                  onChange={(e) => setShape(e.target.value)}
                  name="shape"
                  type="text"
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>

              <div>
                <label>Cake Image</label>
                <input
                  type="file"
                  accept="image/png,image/jpg,image/jpeg"
                  onChange={handleChange}
                  className=" mt-1  ring-neutral-300  py-2 pl-2 "
                ></input>
              </div>
              <div className="flex  justify-center  py-2">
                <button
                  type="submit"
                  className="text-white  font-text rounded-md bg-bgColor px-7 py-2 my-5 "
                >
                  submit
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 w-1/3 my-4 ">
            <img
              src={image}
              className="h-96 w-96 rounded-md text-2xl pl-1 font-heading text-textColor"
              alt=" Uploded Image Shown Here"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export { CakeUpload };
