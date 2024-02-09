import { set, useForm } from "react-hook-form";
import FormInput from "../../component/formInput";
import { useEffect, useState } from "react";
import cake from "../../assets/baker.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserApi } from "../../app/apiUrls";

export default function Register({ onClickRegister, onClickLogin }) {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setCategory(e.target.value);
  };

  const onSubmitInternal = async (e) => {
    onClickRegister(e);
    navigate("/");
    const result = await fetch(createUserApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, email, password }),
    });
    let data = await result.json();

    {
      data.auth
        ? localStorage.setItem("user", JSON.stringify(data.user)) &&
          localStorage.setItem("jwtKey", JSON.stringify(data.auth))
        : alert("enter correct details");
    }
  };

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
            className="flex flex-col p-2  space-y-4"
            onSubmit={onSubmitInternal}
          >
            <div className="flex justify-around items-center text-textColor">
              <p>Select for</p> <FaLongArrowAltRight />
              <label className="  pl-1 font-text flex ">
                User :
                <input
                  onChange={handlechange}
                  name="user"
                  type="radio"
                  value="User"
                  required
                  className="w-4 ml-2"
                />
              </label>
              <p>or</p>
              <label className="text-textColor  pl-1 font-text flex ">
                Seller :
                <input
                  onChange={handlechange}
                  name="user"
                  type="radio"
                  value="Seller"
                  required
                  className="w-4 ml-2"
                />
              </label>
            </div>
            <label className="text-textColor  pl-1 font-text">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              required
              className="ring-1 mt-1 ring-inset ring-neutral-300 border w-full py-2 outline-none rounded-md pl-2 "
            />

            <div>
              <label className="text-textColor  pl-1 font-text ">Email</label>
              <br />
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                required
                className="ring-1 mt-1 ring-inset ring-neutral-300 border w-full py-2 outline-none rounded-md pl-2 "
              />
            </div>
            <div>
              <label className="text-textColor  pl-1 font-text ">
                Password
              </label>
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                required
                className="ring-1 mt-1 ring-inset ring-neutral-300 border w-full py-2 outline-none rounded-md pl-2 "
              />
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
        <p className=" py-3 text-center text-sm text-gray-500">
          Already SignUp
          <button
            className="font-semibold leading-6 text-violet-500 hover:text-violet-600 pl-2"
            onClick={onClickLogin}
          >
            Log In
          </button>
        </p>
      </div>
    </>
  );
}
