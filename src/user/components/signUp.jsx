import { useState } from "react";
import cake from "../../assets/baker.png";
import { BsEmojiSmileFill } from "react-icons/bs";

function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = async (e) => {
    // e.preventDefault();
    const result = await fetch("http://localhost:3001/api/user/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await result.json();
    console.log(data);
  };
  return (
    <>
      <div className="flex  flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
          <img className="mx-auto h-40 w-auto" src={cake} alt="Your Company" />
          <h2 className="flex justify-center items-center  italic text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
            Register with your Email
            <BsEmojiSmileFill
              size="35px"
              className="ml-3 text-bgColor cursor-pointer  "
            />
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-10" onSubmit={submitForm}>
            <div>
              <label className="block  font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2 ">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" ring-1   ring-inset ring-gray-400 border   w-full py-2 rounded-md pl-2 "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block  font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a className="font-semibold text-bgColor cursor-pointer">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" ring-1   ring-inset ring-gray-400 border   w-full py-2 rounded-md pl-2 "
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-bgColor px-3 py-1.5 text-sm font-semibold leading-6 text-white "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserRegister;
