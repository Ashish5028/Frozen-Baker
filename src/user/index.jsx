import { useDispatch } from "react-redux";
import { createUser } from "./userSlice";
import { Register } from "./components/register";
import { LoginUser } from "./components/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserIndex() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState("");
  const [cookie, setCookie] = useState(["potoken"]);

  return (
    <>
      <div className="h-screen">
        {register ? (
          <Register
            onClickLogin={() => {
              setRegister(false);
            }}
            onClickRegister={(e) => {}}
          />
        ) : (
          <LoginUser
            onClickRegister={() => setRegister(true)}
            onClickLogin={() => {}}
          ></LoginUser>
        )}
      </div>
    </>
  );
}
