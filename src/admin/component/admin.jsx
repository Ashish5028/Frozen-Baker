import { useState } from "react";
import cake from "../../assets/baker.png";
import "./style.css";
import { IoCloudUploadSharp } from "react-icons/io5";
import { createProductApi } from "../../app/apiUrls";
function AdminPage() {
  const [product, setProduct] = useState({
    file: "",
    name: "",
    price: "",
    caketype: "",
    flavour: "",
    shape: "",
    size: "",
    weight: "",
  });
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
      await fetch(createProductApi, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ ...product, data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const onChangeInput = (name, value) => {
    setProduct({ ...product, [name]: value });
  };
  const FormField = ({ label, name, type, className }) => {
    return (
      <div>
        <label className="text-textColor  pl-1 font-text ">{label}</label>
        <br />
        <input
          onChange={(e) => {
            onChangeInput(name, e.target.value);
          }}
          name={name}
          type={type}
          required
          className={`ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 ${className}`}
        />
      </div>
    );
  };
  return (
    <>
      <p className="text-3xl   font-heading  text-bgColor flex justify-center pt-5 ">
        <IoCloudUploadSharp size="40px" className="mr-3" /> Welcome here for
        Upload Product
      </p>

      <div className=" flex bg-opacity-60 justify-evenly  px-5">
        <div className=" 2/3 rounded-md  pt-5  ">
          <div className="flex justify-center">
            <img src={cake} className="h-16" />
            <p className="pt-4  font-heading text-textColor text-2xl">
              Upload Your Product Details Here
            </p>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="grid grid-cols-2 gap-6"
          >
            <FormField label={"Product Name"} name="name" type="text" />
            <FormField label={"Product Price"} name="number" type="number" />
            <FormField label={"Product Shape"} name="shape" type="text" />
            <FormField label={"Product Weight"} name="weight" type="text" />
            <FormField label={"Cake Flavour"} name="flavour" type="text" />
            <FormField label={"Product Type"} name="type" type="text" />
            <div>
              <label>Product Image</label>
              <input
                type="file"
                accept="image/png,image/jpg,image/jpeg"
                onChange={handleChange}
                className=" mt-1  ring-neutral-300  py-2 pl-2 "
              ></input>
            </div>
            <div className="flex    py-2">
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
      {/* <AboutPage /> */}
    </>
  );
}

export default AdminPage;
