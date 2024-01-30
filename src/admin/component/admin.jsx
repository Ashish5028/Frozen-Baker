import { useState } from "react";
import cake from "../../assets/baker.png";
import "./style.css";
import { IoCloudUploadSharp } from "react-icons/io5";
import { createProductApi } from "../../app/apiUrls";
function AdminPage() {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [caketype, setCaketype] = useState("");
  const [flavour, setFlavour] = useState("");
  const [shape, setShape] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");

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
      await fetch(createProductApi, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          data: base64EncodedImage,
          name,
          price,
          caketype,
          flavour,
          shape,
          size,
          weight,
        }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <p className="text-3xl   font-heading  text-bgColor flex justify-center pt-5 ">
        <IoCloudUploadSharp size="40px" className="mr-3" /> Welcome here for
        Upload Product
      </p>

      <div className=" flex bg-opacity-60 justify-around  ">
        <div className=" 2/3 rounded-md  pt-5  ">
          <div className="flex justify-center">
            <img src={cake} className="h-16" />
            <p className="pt-4  font-heading text-textColor text-2xl">
              Upload Your Product Details Here
            </p>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="grid grid-cols-2 gap-2"
          >
            <div>
              <label className="text-textColor  pl-1 font-text">
                Product Name
              </label>
              <br />
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                type="text"
                required
                className=" ring-1 mt-1 w-full py-2  ring-inset ring-neutral-300 border outline-none rounded-md pl-2"
              />
            </div>
            <div>
              <label className="text-textColor  pl-1 font-text ">
                Product Price
              </label>
              <br />
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                name="price"
                type="number"
                required
                className="ring-1 mt-1 w-full  ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
              />
            </div>
            <div>
              <label className="text-textColor  pl-1 font-text ">
                Product Type
              </label>
              <br />
              <input
                onChange={(e) => {
                  setCaketype(e.target.value);
                }}
                name="caketype"
                type="text"
                required
                className="ring-1 mt-1 w-full  ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
              />
            </div>
            <div>
              <label className="text-textColor  pl-1 font-text ">
                Cake Flavour
              </label>
              <br />
              <input
                onChange={(e) => {
                  setFlavour(e.target.value);
                }}
                name="flavour"
                type="text"
                required
                className="ring-1 mt-1 w-full  ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
              />
            </div>
            <div>
              <label className="text-textColor  pl-1 font-text ">
                Product Shape
              </label>
              <br />
              <input
                onChange={(e) => {
                  setShape(e.target.value);
                }}
                name="shape"
                type="text"
                required
                className="ring-1 mt-1 w-full  ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
              />
            </div>
            <div>
              <label className="text-textColor  pl-1 font-text ">
                Product Size
              </label>
              <br />
              <input
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                name="size"
                type="text"
                required
                className="ring-1 mt-1 w-full  ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
              />
            </div>
            <div>
              <label className="text-textColor  pl-1 font-text ">
                Product weight
              </label>
              <br />
              <input
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                name="weight"
                type="text"
                required
                className="ring-1 mt-1 w-full  ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
              />
            </div>

            <div className="">
              <div className="text-textColor  pl-1 font-text">
                Choose Product Image
              </div>
              <br />
              <input
                type="file"
                onChange={(e) => handleChange(e)}
                accept="image/png,image/jpg,image/jpeg"
                className="text-textColor pl-1 font-text cursor-pointer"
              />
            </div>

            <div className="flex justify-end   py-2">
              <button
                type="submit"
                className="text-white pl-1 font-text rounded-md bg-bgColor px-7 py-2 my-5 "
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
      {/* <AboutPage /> */}
    </>
  );
}

export default AdminPage;
