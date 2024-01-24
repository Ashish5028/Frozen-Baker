import { useState } from "react";
import axios from "axios";
function DemoPage() {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

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
      await fetch("http://localhost:3007/api/upload/image", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" ">
        <form onSubmit={(e) => handleSubmit(e)} className="">
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
        </form>
        <div>
          <img src={image}></img>
        </div>
      </div>
    </>
  );
}

export { DemoPage };
