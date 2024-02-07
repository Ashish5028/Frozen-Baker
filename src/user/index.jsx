import { useDispatch } from "react-redux";
import { createUser, loginUser } from "./userSlice";
import Register from "./components/register";
import LoginUser from "./components/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UserIndex() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState("");

  return (
    <>
      <div className="h-screen">
        {register ? (
          <Register
            onClickRegister={(e) => {
              dispatch(createUser(e));
            }}
          />
        ) : (
          <LoginUser
            onClickRegister={() => {
              setRegister(true);
            }}
            onClickLogin={(e) => {
              dispatch(loginUser(e)).then(() => {
                navigate("/");
              });
            }}
          />
        )}
      </div>
    </>
  );
}
