import { useState } from "react";
import axios from "axios";
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
      <div className="container  bg-zinc-300">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            type="text"
            required
            className="rounded-md  w-72  py-1 outline-none pl-2 shadow-sm mt-2"
          />
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            name="price"
            type="number"
            required
            className="rounded-md w-72 py-1 outline-none pl-2 shadow-sm mt-2"
          />

          <div className="mb-3">
            <br />
            <input
              type="file"
              // value={() => fileInputState}
              onChange={(e) => handleChange(e)}
              accept="image/png,image/jpg,image/jpeg"
              className=""
            />
          </div>
          <button type="submit">submit</button>
        </form>
        <div>
          <img src={image}></img>
        </div>
      </div>
    </>
  );
}

export { AdminPage };
