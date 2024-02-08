import { useState } from "react";
import { LuIceCream } from "react-icons/lu";

import { IoCloudUploadSharp } from "react-icons/io5";
import { createProductApi, uploadIcecreamApi } from "../../../app/apiUrls";
function IcecreamUpload() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [flavour, setFlavour] = useState("");
  const [weight, setWeight] = useState("");
  const [shape, setShape] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
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
      await fetch(uploadIcecreamApi, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          name,
          flavour,
          weight,
          price,
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
      <div className="h-screen bg-stone-100">
        <p className="text-3xl   font-heading  text-bgColor flex justify-center pt-5 ">
          <IoCloudUploadSharp size="40px" className="mr-3" /> Welcome here for
          Upload IceCream
        </p>
        <div className=" flex bg-opacity-60 justify-evenly  px-5">
          <div className=" 2/3 rounded-md  pt-5  ">
            <p className="pt-4  font-heading text-textColor text-2xl flex justify-center items-center my-2">
              <LuIceCream className="text-headingColor mr-3" fontSize="40px" />
              Upload Your IceCream Details Here
            </p>

            <form
              onSubmit={(e) => handleSubmit(e)}
              className="grid grid-cols-2 gap-6"
            >
              <div>
                <label className="text-textColor  pl-1 font-text ">
                  IceCream Name
                </label>
                <br />
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>

              <div>
                <label className="text-textColor  pl-1 font-text ">
                  IceCream Price
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
                  IceCream Weight
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
                  IceCream Flavour
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
                <label className="pl-2">IceCream Image</label>
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

export { IcecreamUpload };
