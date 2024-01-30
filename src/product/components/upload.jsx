import { useForm } from "react-hook-form";
import FormInput from "../../component/formInput";
import { useEffect, useState } from "react";
import cake from "../../assets/baker.png";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getUsers } from "../userSlice";

export default function Register({ onClickRegister }) {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    mode: "onTouched",
  });

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
    console.log(image);
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFile(file);
    console.log(file);
  };
  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
  };
  const onSubmitInternal = (e) => {
    if (!image) return;
    uploadImage(image);
    onClickRegister(e);
  };
  useEffect(() => {
    dispatch(getUsers());
  });
  return (
    <>
      <div className="flex  flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-3">
          <img className="mx-auto h-32 w-auto" src={cake} alt="Your Company" />
          <h2 className="flex justify-center items-center  italic text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
            Register here
            <BsEmojiSmileFill
              size="35px"
              className="ml-3 text-bgColor cursor-pointer  "
            />
          </h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="flex flex-col p-2"
            onSubmit={handleSubmit(onSubmitInternal)}
          >
            <div>
              <FormInput
                control={control}
                label="Name"
                name="name"
                type="name"
                placeholder="Enter your name"
              ></FormInput>
              <br />
              <FormInput
                control={control}
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
              ></FormInput>
              <br />
              <FormInput
                control={control}
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              ></FormInput>
            </div>
            <br />
            <button
              type="submit"
              className=" bg-bgColor text-center text-sm text-white rounded-md w-full h-10"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
