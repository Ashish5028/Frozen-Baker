import cake from "../../assets/baker.png";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUserApi } from "../../app/apiUrls";
import { useDispatch, useSelector } from "react-redux";

export function LoginUser({ onClickRegister, onClickLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.status);
  const onSubmitInternal = async (e) => {
    e.preventDefault();
    onClickLogin(e);
    const result = await fetch("http://localhost:4050/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (result.ok) {
      let data = await result.json();
      console.log(data);
      let auth = data.auth;
      let name = data.data.name;
      let category = data.data.category;
      localStorage.setItem("auth", auth);
      localStorage.setItem("User", name);
      localStorage.setItem("Category", category);
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex  flex-1 flex-col justify-center font-text lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-3">
          <img className="mx-auto h-32 w-auto" src={cake} alt="Your Company" />
          <h2 className="flex justify-center items-center font-heading  text-center text-3xl font-semibold leading-9 tracking-tight text-gray-900">
            Login here
            <FaCloudUploadAlt
              size="35px"
              className="ml-3 text-bgColor cursor-pointer  "
            />
          </h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="flex flex-col p-2" onSubmit={onSubmitInternal}>
            <div className="space-y-6">
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
            </div>
            <br />
            <button
              type="submit"
              className=" bg-bgColor text-center text-sm text-white rounded-md w-full h-10"
            >
              SignIn
            </button>
          </form>
        </div>
        <p className=" py-3 text-center text-sm text-gray-500">
          Not a member?
          <button
            className="font-semibold leading-6 text-violet-500 hover:text-violet-600 pl-2"
            onClick={onClickRegister}
          >
            SignUp
          </button>
        </p>
      </div>
    </>
  );
}
