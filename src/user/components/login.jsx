import { useForm } from "react-hook-form";
import FormInput from "../../component/formInput";

import cake from "../../assets/baker.png";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function LoginUser({ onClickLogin, onClickRegister }) {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    mode: "onTouched",
  });
  const onSubmitInternal = (e) => {
    onClickLogin(e);
    navigate("/");
  };

  return (
    <>
      <div className="flex  flex-1 flex-col justify-center font-text lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-3">
          <img className="mx-auto h-32 w-auto" src={cake} alt="Your Company" />
          <h2 className="flex justify-center items-center font-heading  text-center text-3xl font-semibold leading-9 tracking-tight text-gray-900">
            Login here
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
