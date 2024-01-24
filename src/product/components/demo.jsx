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
          <div class="mb-4">
            <label
              for="name"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div class="mb-4">
            <label
              for="price"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              Price
            </label>
            <input
              type="phone"
              id="price"
              name="price"
              value={price}
              onChange={handleChange}
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              Image
            </label>
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              About
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              rows="4"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Add +
          </button>

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
